import  Axios  from "axios";
import React, { useEffect, useState } from "react";

export default function Blog() {
  const [blog,setBlog]=useState([])
       useEffect(() => {
            Axios.get("http://localhost:3000/blog")
              .then(res => { setBlog(res.data.data) })
          }, [])
  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row text-center">

          {/* Blog 1 */}
          
           {
            blog.map((item)=>{
              return(
                <div
            className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
                 <div className="home_single_blog">
              <img
                src={"assets/img/blog/"+item.src}
                className="img-fluid"
                alt="Digital marketing strategies"
              />

              <div className="home_blog_content">
                <div className="blog_title_info">
                  <h2>
                    <a href="/blogsingleproject">
                     {item.company}
                    </a>
                  </h2>

                  <span>{item.number}</span>
                  <span>
                    <a href="/blogsingleproject">{item.name}</a>
                  </span>
                </div>

                <p>
                 {item.para}
                </p>

                <a className="home_b_btn" href="/blogsingleproject">
               {item.button}
                </a>
              </div>
            </div>
               </div>
              )
            })
           }
       

        

          {/* Blog 6 */}
        

        </div>
      </div>
    </section>
  );
}
