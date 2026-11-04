import Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function CaseStudyContent() {
  const [casestudy, setCasestudy] = useState([]);

  useEffect(() => {
    Axios.get("https://digital-marketing-l4y5.vercel.app/casestudy")
      .then(res => { setCasestudy(res.data.data) })
  }, [])
  return (
    <>

      <section className="case_content_top_area section-padding">
        <div className="container">
          <div className="row">
            {
              casestudy.map((item)=>{
                return(
                  <>
                  <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="case_content_top">
                <h2>{item.title}</h2>

                <p>
                  {item.para}
                </p>

                <p>
                  {item.para1}
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="case_content_top_img">
                <img
                  src={"assets/img/"+item.src}
                  className="img-fluid"
                  alt="Case Study"
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


    </>
  )
}
