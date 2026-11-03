import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function PopularFeature() {
     const [feature,setFeature]=useState([]);
         
             useEffect(() => {
              Axios.get("http://localhost:3000/feature")
                .then(res => { setFeature(res.data.data) })
            }, [])
  return (
   <>
    <section className="feature_area section-padding">
                    <div className="container">
                        <div className="row text-center">
                            {/* <div className="section-title text-center">
                                <h2>What we do</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div> */}
                           {
                            feature.map((item)=>{
                                return(
                                     <div className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                                <div className="single_feature">
                                    <img src={"assets/img/icon/"+item.icon} alt="icon" />
                                    <h4>{item.title}</h4>
                                    <p>{item.para}</p>
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
