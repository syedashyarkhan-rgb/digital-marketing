import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Testimonials from './Testimonials'
import EmailMarketing from './EmailMarketing'
import Header from './Header'
import PopularWebdesign from './PopularWebdesign'

export default function WebDesign() {
  return (
    <>
    <body data-spy="scroll" data-offset="80">
		 {/* <!-- START NAVBAR --> */}
		<Header/>
	   {/* <!-- END NAVBAR */}
		
		{/* <!-- START SECTION TOP --> */}
		<section className="section-top" style={{backgroundImage: "url(assets/img/bg/section-top.png)",backgroundSize:"cover", backgroundPosition: "center center"}}>
			<div className="container">
				<div className="row">
				  <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
					<div className="section-top-title">
						<h1>Single Service</h1>		
					</div>
				  </div>			  
				</div>
			</div>
		</section>
		{/* <!-- END SECTION TOP --> */}

		{/* <!-- START web design MARKETING PAGE --> */}
		<PopularWebdesign/>
		{/* <!-- END web design MARKETING PAGE --> */}

		{/* <!-- MARKETING LIST --> */}
		<EmailMarketing/>
		{/* <!-- END MARKETING LIST --> */}
		
		{/* <!-- TESTIMONIALS --> */}
		<Testimonials/>
		{/* <!-- END TESTIMONIALS -->	 */}
		
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
