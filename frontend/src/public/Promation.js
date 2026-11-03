import Axios  from "axios";
import React, { useEffect, useState } from "react";

export default function Promation() {
  const [promation,setPromation]=useState([])
     useEffect(() => {
          Axios.get("http://localhost:3000/promation")
            .then(res => { setPromation(res.data.data) })
        }, [])
  return (
    <section className="promotional_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            {
              promation.map((item)=>{
                return(
                  <div className="promotional_content">
              
              <img
                src={"/assets/img/"+item.src}
                className="img-fluid"
                alt="Our professional team"
              />

              <p>
               {item.para}
              </p>

            </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}