import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Testimonials from './Testimonials'
import PopularCaseStudy from './PopularCaseStudy'
import CaseStudyContent from './CaseStudyContent'
import Header from './Header'

export default function CaseStudy() {
  return (
    <>
     <body data-spy="scroll" data-offset="80">


		 {/* <!-- START NAVBAR --> */}
		<Header/>
	   {/* <!-- END NAVBAR-->					 */}
		
		{/* <!-- START SECTION TOP --> */}
		<section className="section-top" style={{backgroundImage: "url(assets/img/bg/section-top.png)",backgroundSize:"cover", backgroundPosition: "center center"}}>
			<div className="container">
				<div className="row">
				  <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
					<div className="section-top-title">
						<h1>Our Case Study</h1>		
					</div>
				  </div>		  
				</div>
			</div>
		</section>
		{/* <!-- END SECTION TOP --> */}
		
		{/* <!-- START CASE STUDY TOP CONTENT --> */}
		<CaseStudyContent/>
		{/* <!-- END CASE STUDY TOP CONTENT --> */}
		
		{/* <!-- START CASE STUDY --> */}
		<PopularCaseStudy/>
		{/* <!-- END CASE STUDY --> */}

		{/* <!-- TESTIMONIALS --> */}
		<Testimonials/>
		{/* <!-- END TESTIMONIALS -->		 */}
		
		{/* <!-- CONTACT --> */}
	   
		{/* <!-- END CONTACT -->		 */}

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
