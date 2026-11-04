import Axios from 'axios';
import React, { useState } from 'react'

export default function AddPrice() {

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



    const add = (e) => {

        e.preventDefault()

        const data = new FormData();

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



        Axios.post("https://digital-marketing-l4y5.vercel.app/addprice", data, {
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
                                    Add Price
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
                                    Price Section
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
                                            Add Price
                                        </h2>

                                        <p className="card-subtitle">
                                            Create content for your website's Price section
                                        </p>
                                    </div>

                                </div>
                                <div className="table-wrapper">
                                    <table className="data-table">
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
