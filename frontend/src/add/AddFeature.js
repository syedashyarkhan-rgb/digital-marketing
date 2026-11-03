import Axios from 'axios';
import React, { useState } from 'react'

export default function AddFeature() {
    const [icon, setIcon] = useState([]);
    const [title, setTitle] = useState("");
    const [para, setPara] = useState("");



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();
        data.append("pic", icon[0]);
        data.append("title", title);
        data.append("para", para);



        Axios.post("http://localhost:3000/addfeature", data, {
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
                                    Add Feature
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
                                    Feature Section
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
                                            Add Feature
                                        </h2>

                                        <p className="card-subtitle">
                                            Create content for your website's Feature section
                                        </p>
                                    </div>

                                </div>
                                <div className="table-wrapper">
                                    <table className="data-table">
                                        <tbody>
                                            <tr>
                                                <th><label> ICON: </label></th><td><input type="file" onChange={(e) => { setIcon(e.target.files) }} /></td>
                                            </tr>
                                            <tr>
                                                <th><label>TITLE: </label></th><td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
                                            </tr>
                                            <tr>
                                                <th><label> PARAGRAPH: </label></th><td><input type="text" value={para} onChange={(e) => { setPara(e.target.value) }} /></td>
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
