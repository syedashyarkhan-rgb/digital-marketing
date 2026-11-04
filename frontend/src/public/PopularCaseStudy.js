import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function PopularCaseStudy() {
   const [casecontent, setCasecontent] = useState([]);
  
    useEffect(() => {
      Axios.get("https://digital-marketing-l4y5.vercel.app/casecontent")
        .then(res => { setCasecontent(res.data.data) })
    }, [])
  return (
   <>  
<section className="case_content_area section-padding">
  <div className="container">
    <div className="section-title text-center">
      <h2>Delivering Results Through Proven Strategies</h2>
      <p>
        Every successful project begins with understanding the client's goals,
        identifying key challenges, and implementing data-driven solutions that
        produce measurable business growth.
      </p>
    </div>

    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12">
        <div className="row">

        {
          casecontent.map((item)=>{
            return(
                <div className="col-lg-6 col-sm-12 col-xs-12">
            <div className="case_content">
              <h2>{item.title}</h2>
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
    </div>
  </div>
</section>


   </>
  )
}
