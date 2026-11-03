import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UMarketing() {
    const [src, setSrc] = useState([]);
    const [title, setTitle] = useState("");
    const [para, setPara] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("http://localhost:3000/singlemarket/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setSrc(res.data.src)
                setTitle(res.data.title)
                setPara(res.data.para)
               



            })
    }, [id])



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("pic", src[0]);
        data.append("title", title);
        data.append("para", para);



        Axios.post("http://localhost:3000/umarket", data, {
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
                        <th><label> ICON: </label></th><td><input type="file" onChange={(e) => { setSrc(e.target.files) }} /></td>
                    </tr>
                    <tr>
                        <th><label>TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
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
