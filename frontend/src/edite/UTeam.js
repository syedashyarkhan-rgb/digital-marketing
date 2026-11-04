import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UTeam() {
    const [src, setSrc] = useState([]);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");
    const [icon2, setIcon2] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/singleteam/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setSrc(res.data.src)
                setName(res.data.name)
                setTitle(res.data.title)
                setIcon(res.data.icon)
                setIcon2(res.data.icon2)


            })
    }, [id])




    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("pic", src[0]);
        data.append("name", name);
        data.append("title", title);
        data.append("icon", icon);
        data.append("icon2", icon2);



        Axios.post("https://digital-marketing-l4y5.vercel.app/uteam", data, {
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
                        <th><label>NAME: </label></th><td><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> ICON: </label></th><td><input type="text" value={icon} onChange={(e) => { setIcon(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> ICON: </label></th><td><input type="text" value={icon2} onChange={(e) => { setIcon2(e.target.value) }} /></td>
                    </tr>


                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>
        </>
    )
}
