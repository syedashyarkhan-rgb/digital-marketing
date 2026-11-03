import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UCounter() {
    const [icon, setIcon] = useState([]);
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("http://localhost:3000/singlecounter/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setIcon(res.data.icon)
                setNumber(res.data.number)
                setTitle(res.data.title)


            })
    }, [id])


    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("icon", icon[0]);
        data.append("number", number);
        data.append("title", title);




        Axios.post("http://localhost:3000/ucounter", data, {
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
                        <th><label> ICON: </label></th><td><input type="file" onChange={(e) => { setIcon(e.target.files) }} /></td>
                    </tr>
                    <tr>
                        <th><label> NUMBER: </label></th><td><input type="text" value={number} onChange={(e) => { setNumber(e.target.value) }} /></td>
                    </tr>

                    <tr>
                        <th><label>TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                    </tr>


                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>

        </>
    )
}
