import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TSingleBlog() {
  const [singleblog, setSingleblog] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:3000/singleblog", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => { setSingleblog(res.data.data) })
  }, [])
  const dodel = (ind) => {
    // alert("Working");
    const newlist = singleblog.filter(v => v._id !== ind)
    setSingleblog(newlist)

    Axios.delete("http://localhost:3000/delsingleblog/" + ind, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(console.log("record has been Deleted"));
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

            {/* SIDEBAR HEADER */}
            <div
              style={{
                padding: "25px 20px",
                textAlign: "center"
              }}
            >

              <div
                style={{
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
                }}
              >
                ✨
              </div>

              <h3
                style={{
                  margin: "0 0 5px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "700"
                }}
              >
                Content Manager
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "13px"
                }}
              >
                Website Management
              </p>

            </div>


            {/* CONTENT INFORMATION */}
            <div
              style={{
                padding: "10px 20px"
              }}
            >

              {/* CURRENT PAGE */}
              <div
                style={{
                  padding: "15px",
                  marginBottom: "12px",
                  borderRadius: "12px",
                  background: "rgba(139, 92, 246, 0.15)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  color: "white"
                }}
              >

                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "#a78bfa",
                    marginBottom: "6px",
                    letterSpacing: "0.8px"
                  }}
                >
                  CURRENT PAGE
                </div>

                <strong
                  style={{
                    fontSize: "15px"
                  }}
                >
                  Single Blog
                </strong>

              </div>


              {/* CONTENT TYPE */}
              <div
                style={{
                  padding: "15px",
                  marginBottom: "12px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)"
                }}
              >

                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "6px",
                    letterSpacing: "0.8px"
                  }}
                >
                  CONTENT TYPE
                </div>

                <strong
                  style={{
                    fontSize: "15px"
                  }}
                >
                  Blog Section
                </strong>

              </div>


              {/* STATUS */}
              <div
                style={{
                  padding: "15px",
                  marginBottom: "12px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)"
                }}
              >

                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "6px",
                    letterSpacing: "0.8px"
                  }}
                >
                  STATUS
                </div>

                <strong
                  style={{
                    color: "#34d399",
                    fontSize: "15px"
                  }}
                >
                  ● Ready
                </strong>

              </div>


              {/* MODE */}
              <div
                style={{
                  padding: "15px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)"
                }}
              >

                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "6px",
                    letterSpacing: "0.8px"
                  }}
                >
                  MODE
                </div>

                <strong
                  style={{
                    fontSize: "15px",
                    color: "#67e8f9"
                  }}
                >
                  View & Manage
                </strong>

              </div>

            </div>

          </aside>


          <main className="main-content">

            <section className="content-grid">
              <div className="glass-card table-card">
                <div className="card-header">
                  <div>
                    <h2 className="card-title">Single Blog Content</h2>
                    <p className="card-subtitle">
                      View and manage your blog content
                    </p>
                  </div>
                  <div className="card-actions">
                    <button className="card-btn">View All</button>
                    <button className="card-btn">Export</button>
                  </div>
                </div>
                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>

                        <th>ID</th><th>SRC</th><th>PARA</th><th>PARA1</th><th>PARA2</th><th>DELETE</th><th>EDITE</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        singleblog.map((v) => {
                          return (

                            <tr>
                              <td> {v._id} </td><td>{v.src}</td><td>{v.para}</td><td>{v.para1}</td><td>{v.para2}</td>
                              <td><button type="button" onClick={() => dodel(v._id)} style={{ background: "transparent", border: "none", padding: 0, margin: 0, color: "#0d6efd", textDecoration: "underline", cursor: "pointer" }}>delete</button></td>
                              <td><a href={"/usingleblog/" + v._id}>Edit</a></td>



                            </tr>
                          )

                        })
                      }



                    </tbody>
                  </table>
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
          <p>Copyright © 2026 Your Company. Designed by <a href="https://templatemo.com" target="_blank" rel="nofollow">TemplateMo</a></p>
        </footer>
      </div>

    </>
  )
}
