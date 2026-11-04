import React, { useEffect, useState } from 'react'
import AboutHireus from './AboutHireus'
import Header from './Header'
import Axios from 'axios';

export default function TeamMember() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/allteam")
      .then(res => { setTeam(res.data.data) })
  }, [])
  return (
    <>
      <body data-spy="scroll" data-offset="80">

        {/* <!-- START NAVBAR --> */}
        <Header />
        {/* <!-- END NAVBAR-->							 */}

        {/* <!-- START SECTION TOP --> */}
        <section className="section-top" style={{ backgroundImage: "url(assets/img/bg/section-top.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
                <div className="section-top-title">
                  <h1>Team Member</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END SECTION TOP --> */}

        {/* <!-- START TEAM MEMBERS --> */}
        <section id="team" className="team_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h2>Our Professional Team</h2>
              <p>Meet our talented team of professionals dedicated to building modern websites, developing powerful solutions, and growing your online presence.</p>
            </div>

            <div className="row text-center">


              {
                team.map((item) => {
                  return (
                    <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                      <div className="our-team">
                        <div className="single-team">
                          <img src={"assets/img/team/" + item.src} className="img-fluid" alt="Web Developer" />
                          <h3>{item.name}</h3>
                          <p>{item.title}</p>
                        </div>
                        <ul className="social">
                          <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={item.icon} aria-label="Facebook"><span className="sr-only">Facebook</span></a></li>
                          <li><a href="https://twitter.com/" target="_blank" rel="noreferrer" className={item.icon2} aria-label="Twitter"><span className="sr-only">Twitter</span></a></li>
                        </ul>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        {/* <!-- END TEAM MEMBERS -->		 */}

        {/* <!-- HIRE US --> */}
        <AboutHireus />
        {/* <!-- END HIRE US --> */}

        {/* <!-- START FOOTER --> */}
        <footer />
        {/* <!-- END FOOTER -->	 */}
      </body>
    </>
  )
}
