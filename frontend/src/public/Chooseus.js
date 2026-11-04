import  Axios  from "axios";
import React, { useEffect, useState } from "react";

export default function Chooseus() {
  const [choose,setChoose]=useState([])
   useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/chooseus")
          .then(res => { setChoose(res.data.data) })
      }, [])
  return (
    <section className="why_choose_area section-padding">
      <div className="container">
        <div className="row align-items-center">

         {
         choose.map((item)=>{
          return(
            <>
             <div
            className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div className="single_why_choose">
              <h2>
               {item.h1}
                <br />
               {item.h2}
                <br />
               {item.h3}
              </h2>

              <p>
                {item.para}
              </p>

              <a className="btn_one" href="/about">
               {item.button}
              </a>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div className="single_why_choose_img">
              <img
                src={"/assets/img/"+item.src}
                className="img-fluid"
                alt="Our digital workspace"
              />
            </div>
          </div>
          </>
          )
         })
         }
        </div>
      </div>
    </section>
  );
}