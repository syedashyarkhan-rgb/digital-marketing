import Axios  from 'axios'
import React, { useEffect, useState } from 'react'

export default function Feature() {
  const [feature,setFeature]=useState([])
     useEffect(() => {
      Axios.get("https://digital-marketing-l4y5.vercel.app/feature")
        .then(res => { setFeature(res.data.data) })
    }, [])
  return (
    <>
      <section className="feature_area">
        <div className="container">
          <div className="row feature_bg">

            <div className="section-title text-center">
              <h2>What We Do</h2>
              <p>
                We provide creative digital solutions that help businesses
                build a strong online presence and achieve sustainable growth.
              </p>
            </div>

            {
              feature.map((item)=>{
                return(
                   <div
              className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="single_feature">
                <img src={"assets/img/icon/"+item.icon} alt="UX Research" />
                <h4>{item.title}</h4>
                <p>
                 {item.para}
                </p>
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