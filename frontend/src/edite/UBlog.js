import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UBlog() {
    const [src, setSrc] = useState([]);
    const [company, setCompany] = useState("");
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [para, setPara] = useState("");
    const [button, setButton] = useState("");


    const { id } = useParams();


    useEffect(() => {
        Axios.get("http://localhost:3000/singleblog/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setSrc(res.data.src)
                setCompany(res.data.company)
                setNumber(res.data.number)
                setName(res.data.name)
                setPara(res.data.para)
                setButton(res.data.button)




            })
    }, [id])



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("pic", src[0]);
        data.append("company", company);
        data.append("number", number);
        data.append("name", name);
        data.append("para", para);
        data.append("button", button);



        Axios.post("http://localhost:3000/ublog", data, {
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
                        <th><label> SRC: </label></th><td><input type="file" onChange={(e) => { setSrc(e.target.files) }} /></td>
                    </tr>
                    <tr>
                        <th><label>COMPANY: </label></th><td><input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> NUMBER: </label></th><td><input type="text" value={number} onChange={(e) => { setNumber(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> NAME: </label></th><td><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> PARAGRAPH: </label></th><td><input type="text" value={para} onChange={(e) => { setPara(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> BUTTON: </label></th><td><input type="text" value={button} onChange={(e) => { setButton(e.target.value) }} /></td>
                    </tr>


                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>
        </>
    )
}
