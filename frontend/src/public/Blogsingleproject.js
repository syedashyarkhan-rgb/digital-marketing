import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PopularBlogSingleProject from './PopularBlogSingleProject'

export default function Blogsingleproject() {
  return (
    <>
     <body data-spy="scroll" data-offset="80">
		
		 {/* <!-- START NAVBAR --> */}
		<Header/>
	   {/* <!-- END NAVBAR-->								 */}
		
		{/* <!-- START SECTION TOP --> */}
		<section className="section-top" style={{backgroundImage: "url(assets/img/bg/section-top.png)",backgroundSize:"cover" ,backgroundPosition: "center center"}}>
			<div className="container">
				<div className="row">
				  <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
					<div className="section-top-title">
						<h1>Blog Single Page Post</h1>		
					</div>
				  </div>				  
				</div>
			</div>
		</section>
		{/* <!-- END SECTION TOP -->		 */}

		{/* <!-- START BLOG --> */}
		<PopularBlogSingleProject/>
		{/* <!-- END BLOG -->		 */}

		{/* <!-- START FOOTER --> */}
		<Footer/>
		{/* <!-- END FOOTER -->	 */}
        </body>
    </>
  )
}
