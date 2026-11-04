import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UPrice() {
    const [dollar, setDollar] = useState("");
    const [number, setNumber] = useState("");
    const [month, setMonth] = useState("");
    const [title, setTitle] = useState("");
    const [heading1, setHeading1] = useState("");
    const [heading2, setHeading2] = useState("");
    const [heading3, setHeading3] = useState("");
    const [heading4, setHeading4] = useState("");
    const [heading5, setHeading5] = useState("");
    const [button, setButton] = useState("");

    const { id } = useParams();


    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/singleprice/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
            .then(res => {
                setDollar(res.data.dollar)
                setNumber(res.data.number)
                setMonth(res.data.month)
                setTitle(res.data.title)
                setHeading1(res.data.heading1)
                setHeading2(res.data.heading2)
                setHeading3(res.data.heading3)
                setHeading4(res.data.heading4)
                setHeading5(res.data.heading5)
                setButton(res.data.button)


            })
    }, [id])



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("id", id);
        data.append("dollar", dollar);
        data.append("number", number);
        data.append("month", month);
        data.append("title", title);
        data.append("heading1", heading1);
        data.append("heading2", heading2);
        data.append("heading3", heading3);
        data.append("heading4", heading4);
        data.append("heading5", heading5);
        data.append("button", button);



        Axios.post("https://digital-marketing-l4y5.vercel.app/uprice", data, {
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
                        <th><label>DOLLAR: </label></th><td><input type="text" value={dollar} onChange={(e) => { setDollar(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> NUMBER: </label></th><td><input type="text" value={number} onChange={(e) => { setNumber(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> MONTH: </label></th><td><input type="text" value={month} onChange={(e) => { setMonth(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> HEADING: </label></th><td><input type="text" value={heading1} onChange={(e) => { setHeading1(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> HEADING: </label></th><td><input type="text" value={heading2} onChange={(e) => { setHeading2(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> HEADING: </label></th><td><input type="text" value={heading3} onChange={(e) => { setHeading3(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> HEADING: </label></th><td><input type="text" value={heading4} onChange={(e) => { setHeading4(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <th><label> HEADING: </label></th><td><input type="text" value={heading5} onChange={(e) => { setHeading5(e.target.value) }} /></td>
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
