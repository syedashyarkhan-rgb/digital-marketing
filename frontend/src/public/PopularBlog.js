import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Header from './Header'
import  Axios  from 'axios'

export default function PopularBlog() {
	 const [blog,setBlog]=useState([])
       useEffect(() => {
            Axios.get("https://digital-marketing-l4y5.vercel.app/allblog")
              .then(res => { setBlog(res.data.data) })
          }, [])
  return (
    <>
      <body data-spy="scroll" data-offset="80">		

		 {/* <!-- START NAVBAR --> */}
	   <Header/>
	   {/* <!-- END NAVBAR-->							 */}
		
		{/* <!-- START SECTION TOP --> */}
		<section class="section-top" style={{backgroundImage: "url(assets/img/bg/section-top.png)",backgroundSize:"cover", backgroundPosition: "center center"}}>
			<div class="container">
				<div class="row">
				  <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
					<div class="section-top-title">
						<h1>Blog Page Post</h1>		
					</div>
				  </div>				  
				</div>
			</div>
		</section>
		{/* <!-- END SECTION TOP --> */}
		
		{/* <!-- BLOG --> */}
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
		{/* <!-- END BLOG -->	 */}

		{/* <!-- START PARTNER LOGO --> */}
		<Logo/>
		{/* <!-- END PARTNER LOGO --> */}
		
		{/* <!-- START FOOTER --> */}
		<Footer/>
		{/* <!-- END FOOTER -->	 */}
        </body>
    </>
  )
}
