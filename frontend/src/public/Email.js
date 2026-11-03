import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Testimonials from './Testimonials'
import Header from './Header'
import PopularEmail from './PopularEmail'
import EmailMarketing from './EmailMarketing'

export default function Email() {
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

		{/* <!-- popular email --> */}
		<PopularEmail/>
		{/* <!-- END SERVICE MARKETING PAGE --> */}

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
        {/* end */}
        </body>
   </>
  )
}
