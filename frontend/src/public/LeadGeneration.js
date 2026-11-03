import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Testimonials from './Testimonials'
import EmailMarketing from './EmailMarketing'
import Header from './Header'
import PopularLeadGeneration from './PopularLeadGeneration'

export default function LeadGeneration() {
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
						<h1>Single Service</h1>		
					</div>
				  </div>			  
				</div>
			</div>
		</section>
		{/* <!-- END SECTION TOP --> */}

		{/* <!-- START lead generation MARKETING PAGE --> */}
		<PopularLeadGeneration/>
		{/* <!-- END lead generation MARKETING PAGE --> */}

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
