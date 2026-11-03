import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function USingleProject() {
    const [src, setSrc] = useState([]);
    const [title, setTitle] = useState("");
    const [para, setPara] = useState("");
    const [icon1, setIcon1] = useState("");
    const [client, setClient] = useState("");
    const [name, setName] = useState("");
    const [icon2, setIcon2] = useState("");
    const [datas, setDatas] = useState("");
    const [number, setNumber] = useState("");
    const [icon3, setIcon3] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const [icon4, setIcon4] = useState("");
    const [url, setUrl] = useState("");
    const [link2, setLink2] = useState("");
    const [button, setButton] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("http://localhost:3000/singleproject/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setSrc(res.data.src)
                setTitle(res.data.title)
                setPara(res.data.para)
                setIcon1(res.data.icon)
                setClient(res.data.client)
                setName(res.data.name)
                setIcon2(res.data.icon2)
                setDatas(res.data.date)
                setNumber(res.data.number)
                setIcon3(res.data.icon3)
                setCategory(res.data.category)
                setLink(res.data.link)
                setIcon4(res.data.icon4)
                setUrl(res.data.url)
                setLink2(res.data.link2)
                setButton(res.data.button)




            })
    }, [id])




    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("pic", src[0]);
        data.append("title", title);
        data.append("para", para);
        data.append("icon", icon1);
        data.append("client", client);
        data.append("name", name);
        data.append("icon2", icon2);
        data.append("data", datas);
        data.append("number", number);
        data.append("icon3", icon3);
        data.append("category", category);
        data.append("link", link);
        data.append("icon4", icon4);
        data.append("url", url);
        data.append("link2", link2);
        data.append("button", button);




        Axios.post("http://localhost:3000/usingleproject", data, {
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
                        <th><label>TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> PARAGRAPH: </label></th><td><input type="text" value={para} onChange={(e) => { setPara(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> ICON: </label></th><td><input type="text" value={icon1} onChange={(e) => { setIcon1(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> CLIENT: </label></th><td><input type="text" value={client} onChange={(e) => { setClient(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> NAME: </label></th><td><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> ICON: </label></th><td><input type="text" value={icon2} onChange={(e) => { setIcon2(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> DATA: </label></th><td><input type="text" value={datas} onChange={(e) => { setDatas(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> NUMBER: </label></th><td><input type="text" value={number} onChange={(e) => { setNumber(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> ICON: </label></th><td><input type="text" value={icon3} onChange={(e) => { setIcon3(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> CATEGORY: </label></th><td><input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> LINK: </label></th><td><input type="text" value={link} onChange={(e) => { setLink(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> ICON: </label></th><td><input type="text" value={icon4} onChange={(e) => { setIcon4(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> URL: </label></th><td><input type="text" value={url} onChange={(e) => { setUrl(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> LINK: </label></th><td><input type="text" value={link2} onChange={(e) => { setLink2(e.target.value) }} /></td>
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
