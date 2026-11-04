import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UAbout() {
    const [title, setTitle] = useState("");
    const [heading, setHeading] = useState("");
    const [para, setPara] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/singleabout/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setTitle(res.data.title)
                setHeading(res.data.heading)
                setPara(res.data.para)
                

            })
    }, [id])



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
         data.append("id", id);
        data.append("title", title);
        data.append("heading", heading);
        data.append("para", para);



        Axios.post("https://digital-marketing-l4y5.vercel.app/uabout", data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(response => { console.log(response.data) })
            .catch(err => { console.log(err) });
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th><label> TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label>HEADING: </label></th><td><input type="text" value={heading} onChange={(e) => { setHeading(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> PARAGRAPH: </label></th><td><input type="text" value={para} onChange={(e) => { setPara(e.target.value) }} /></td>
                    </tr>


                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>
        </>
    )
}
