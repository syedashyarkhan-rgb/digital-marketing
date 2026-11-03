import  Axios  from "axios";
import React, { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimional,settestimional]=useState([])
     useEffect(() => {
          Axios.get("http://localhost:3000/testimonials")
            .then(res => { settestimional(res.data.data) })
        }, [])
  return (
    <>
      <div className="testimonial_area section-padding">
        <div className="container">

          <div className="section-title text-center">
            <h2>What Our Clients Say</h2>
            <p>
              We are committed to delivering quality solutions, creative
              ideas, and reliable services that help our clients achieve
              their goals and grow their businesses.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12">

              <div className="row">

                {
                  testimional.map((item)=>{
                    return(
                      <div
                  className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                  data-wow-offset="0"
                >
                  <div className="single_testimonial">

                    <div className="testimonial_img">
                      <img
                        src={"assets/img/testimonial/"+item.src}
                        alt="Client testimonial"
                      />
                    </div>

                    <p>
                      {item.para}
                    </p>

                    <h4>{item.name}</h4>
                    <h5>{item.title} </h5>

                  </div>
                </div>
                    )
                  })
                }


              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
