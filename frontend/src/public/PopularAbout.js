import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function PopularAbout() {
  const [about,setAbout]=useState([]);
     
         useEffect(() => {
          Axios.get("http://localhost:3000/about")
            .then(res => { setAbout(res.data.data) })
        }, [])
  return (
    <>
      <section className="about_page_area">
        <div className="container">
          <div className="row text-center">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              {
              about.map((item)=>{
                return(
                  <div className="single_about_content">
                <h2>{item.title} <br />{item.heading}</h2>
                <p>{item.para}</p>
              </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}