import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ULeadGeneration() {
    const [title, setTitle] = useState("");
    const [src, setSrc] = useState([]);
    const [para, setPara] = useState("");
    const [para1, setPara1] = useState("");
    const [para2, setPara2] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/singlelead/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setTitle(res.data.title)
                setSrc(res.data.src)
                setPara(res.data.para)
                setPara1(res.data.para1)
                setPara2(res.data.para2)



            })
    }, [id])



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("title", title);
        data.append("pic", src[0]);
        data.append("para", para);
        data.append("para1", para1);
        data.append("para2", para2);



        Axios.post("https://digital-marketing-l4y5.vercel.app/uleadgeneration", data, {
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
                        <th><label>TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> SRC: </label></th><td><input type="file" onChange={(e) => { setSrc(e.target.files) }} /></td>
                    </tr>
                    <tr>
                        <th><label>PARAGRAPH: </label></th><td><input type="text" value={para} onChange={(e) => { setPara(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> PARAGRAPH: </label></th><td><input type="text" value={para1} onChange={(e) => { setPara1(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> PARAGRAPH: </label></th><td><input type="text" value={para2} onChange={(e) => { setPara2(e.target.value) }} /></td>
                    </tr>


                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>

        </>
    )
}
