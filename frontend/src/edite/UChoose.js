import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UChoose() {
    const [h1, setH1] = useState("");
    const [h2, setH2] = useState("");
    const [h3, setH3] = useState("");
    const [para, setPara] = useState("");
    const [button, setButton] = useState("");
    const [src, setSrc] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/singlechoose/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setH1(res.data.h1)
                setH2(res.data.h2)
                setH3(res.data.h3)
                setPara(res.data.para)
                setButton(res.data.button)
                setSrc(res.data.src)


            })
    }, [id])


    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
         data.append("id", id);
        data.append("h1", h1);
        data.append("h2", h2);
        data.append("h3", h3);
        data.append("para", para);
        data.append("button", button);
        data.append("pic", src[0]);



        Axios.post("https://digital-marketing-l4y5.vercel.app/uchoose", data, {
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
                        <th><label> NAME: </label></th><td><input type="text" value={h1} onChange={(e) => { setH1(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label>NAME: </label></th><td><input type="text" value={h2} onChange={(e) => { setH2(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> NAME: </label></th><td><input type="text" value={h3} onChange={(e) => { setH3(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> PARAGRAPH: </label></th><td><input type="text" value={para} onChange={(e) => { setPara(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> button: </label></th><td><input type="text" value={button} onChange={(e) => { setButton(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> SRC: </label></th><td><input type="file" onChange={(e) => { setSrc(e.target.files) }} /></td>
                    </tr>





                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>
        </>
    )
}
