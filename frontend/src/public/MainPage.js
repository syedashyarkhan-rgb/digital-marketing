import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'


export default function MainPage() {
  const [home,setHome]=useState([])
   useEffect(() => {
    Axios.get("http://localhost:3000/home")
      .then(res => { setHome(res.data.data) })
  }, [])
  return (
    <>
    {
      home.map((item)=>{
        return(
            <section
        data-stellar-background-ratio="0.3"
        id="home"
        className="home_bg"
        style={{
         backgroundImage: `url(assets/img/bg/${item.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
            
                   <div className="hero-text">
                <h2>{item.title}</h2>
                <p>{item.para}</p>
                <a href="/about">{item.button}</a>
              </div>
               
            </div>
          </div>
        </div>
      </section>
        )
      })
    }
    
    </>
  )
}