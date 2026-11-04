import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function USkills() {
    const [name, setName] = useState("");
    const [percent, setPercnet] = useState("");

     const { id } = useParams();
    
    
        useEffect(() => {
            Axios.get("https://digital-marketing-l4y5.vercel.app/singleskills/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
                .then(res => {
                    setName(res.data.name)
                    setPercnet(res.data.percent)
                   
                   
    
    
                })
        }, [id])




    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("name", name);
        data.append("percent", percent);




        Axios.post("https://digital-marketing-l4y5.vercel.app/uskills", data, {
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
                        <th><label>NAME: </label></th><td><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> PERCENT: </label></th><td><input type="text" value={percent} onChange={(e) => { setPercnet(e.target.value) }} /></td>
                    </tr>




                </tbody>

            </table>
            {/* <input type="submit" value="Add Record" /> */}
            <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "blueviolet", cursor: "pointer" }}> Add Course </button>

        </>
    )
}
