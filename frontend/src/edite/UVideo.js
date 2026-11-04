import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UVideo() {
    const [src, setSrc] = useState([]);
    const [link, setLink] = useState("");
    const [icon, setIcon] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/singlevideo/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setSrc(res.data.src)
                setLink(res.data.link)
                setIcon(res.data.icon)


            })
    }, [id])



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("pic", src[0]);
        data.append("link", link);
        data.append("icon", icon);



        Axios.post("https://digital-marketing-l4y5.vercel.app/uvideo", data, {
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
                        <th><label>LINK: </label></th><td><input type="text" value={link} onChange={(e) => { setLink(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> ICON: </label></th><td><input type="text" value={icon} onChange={(e) => { setIcon(e.target.value) }} /></td>
                    </tr>




                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>

        </>
    )
}
