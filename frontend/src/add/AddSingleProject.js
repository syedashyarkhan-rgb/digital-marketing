import Axios from 'axios';
import React, { useState } from 'react'

export default function AddSingleProject() {
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



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("pic", src[0]);
        data.append("title", title);
        data.append("para", para);
        data.append("icon", icon1);
        data.append("client", client);
        data.append("name", name);
        data.append("icon2", icon2);
        data.append("data", data);
        data.append("number", number);
        data.append("icon3", icon3);
        data.append("category", category);
        data.append("link", link);
        data.append("icon4", icon4);
        data.append("url", url);
        data.append("link2", link2);
        data.append("button", button);




        Axios.post("http://localhost:3000/addsingleproject", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => { console.log(response.data) })
            .catch(err => { console.log(err) });
    }
    return (
        <>
            <div className="dashboard-page">
                <div className="background"></div>
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>

                <div className="dashboard">

                    <aside className="sidebar" id="sidebar">

                        <div style={{
                            padding: "25px 20px",
                            textAlign: "center"
                        }}>

                            <div style={{
                                width: "70px",
                                height: "70px",
                                margin: "0 auto 15px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "30px",
                                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.35)"
                            }}>
                                ✨
                            </div>

                            <h3 style={{
                                margin: "0 0 5px",
                                color: "white"
                            }}>
                                Add Content
                            </h3>

                            <p style={{
                                margin: 0,
                                color: "rgba(255,255,255,0.6)",
                                fontSize: "13px"
                            }}>
                                Website Management
                            </p>

                        </div>


                        <div style={{
                            padding: "10px 20px"
                        }}>

                            <div style={{
                                padding: "14px",
                                marginBottom: "10px",
                                borderRadius: "12px",
                                background: "rgba(139, 92, 246, 0.15)",
                                border: "1px solid rgba(139, 92, 246, 0.3)",
                                color: "white"
                            }}>
                                <div style={{
                                    fontSize: "12px",
                                    color: "#a78bfa",
                                    marginBottom: "5px"
                                }}>
                                    CURRENT PAGE
                                </div>

                                <strong>
                                    Add Single Project
                                </strong>
                            </div>


                            <div style={{
                                padding: "14px",
                                marginBottom: "10px",
                                borderRadius: "12px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.75)"
                            }}>
                                <div style={{
                                    fontSize: "12px",
                                    marginBottom: "5px"
                                }}>
                                    CONTENT TYPE
                                </div>

                                <strong>
                                   Single Project Section
                                </strong>
                            </div>


                            <div style={{
                                padding: "14px",
                                borderRadius: "12px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.75)"
                            }}>
                                <div style={{
                                    fontSize: "12px",
                                    marginBottom: "5px"
                                }}>
                                    STATUS
                                </div>

                                <strong style={{
                                    color: "#34d399"
                                }}>
                                    ● Ready
                                </strong>
                            </div>

                        </div>

                    </aside>


                    <main className="main-content">
                        <section className="content-grid">



                            <div className="glass-card table-card">
                                <div className="card-header">

                                    <div>
                                        <h2 className="card-title">
                                            Add Single Project
                                        </h2>

                                        <p className="card-subtitle">
                                            Create content for your website's Single Project section
                                        </p>
                                    </div>

                                </div>
                                <div className="table-wrapper">
                                    <table className="data-table">
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

                                    <button onClick={add} style={{ width: "130px", height: "40px", color: "white", backgroundColor: "#059669", cursor: "pointer" }}> Add  </button>
                                </div>
                            </div>
                        </section>


                    </main>
                </div>


                <button className="mobile-menu-toggle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>


                <footer className="site-footer">
                    <p>Copyright © 2026 Your Company. Designed by <a href="https://templatemo.com" target="_blank" rel="nofollow noreferrer">TemplateMo</a></p>
                </footer>
            </div>


        </>
    )
}
