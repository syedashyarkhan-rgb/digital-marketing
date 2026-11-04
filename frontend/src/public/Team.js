import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/team")
      .then(res => { setTeam(res.data.data) })
  }, [])
  return (
    <>

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
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={item.icon}></a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={item.icon2}></a></li>
                      </ul>
                    </div>
                  </div>
                )
              })
            }




          </div>
        </div>
      </section>
    </>
  )
}
