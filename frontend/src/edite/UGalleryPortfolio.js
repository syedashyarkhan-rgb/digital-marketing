import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UGalleryPortfolio() {
    const [category, setCategory] = useState("");
    const [src, setSrc] = useState([]);
    const [title, setTitle] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/singlegalleryportfolio/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setCategory(res.data.category)
                setSrc(res.data.img)
                setTitle(res.data.title)
               


            })
    }, [id])




    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("category", category);
        data.append("pic", src[0]);
        data.append("title", title);



        Axios.post("https://digital-marketing-l4y5.vercel.app/ugalleryportfolio", data, {
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
                        <th><label>CATEGORY: </label></th><td><input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> SRC: </label></th><td><input type="file" onChange={(e) => { setSrc(e.target.files) }} /></td>
                    </tr>
                    <tr>
                        <th><label> TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                    </tr>




                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>
        </>
    )
}
