import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Header from './Header'
import Popularservice from './Popularservice'
import Price from './Price'

export default function Service() {
  return (
    <>
    <body data-spy="scroll" data-offset="80">
		 {/* <!-- START NAVBAR --> */}
		<Header/>
	   {/* <!-- END NAVBAR-->							 */}
		
		{/* <!-- START SECTION TOP --> */}
		<section className="section-top" style={{backgroundImage: "url(assets/img/bg/section-top.png)",backgroundSize:"cover", backgroundPosition:" center center"}}>
			<div className="container">
				<div className="row">
				  <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
					<div className="section-top-title">
						<h1>Our Service</h1>		
					</div>
				  </div>			  
				</div>
			</div>
		</section>
		{/* <!-- END SECTION TOP --> */}

		{/* <!-- SETVICE --> */}
		<Popularservice/>
		{/* <!-- END SETVICE --> */}

		{/* <!-- START PRICING TABLE --> */}
		<Price/>
		{/* <!-- END PRICING TABLE --> */}

		{/* <!-- START PARTNER LOGO --> */}
		<Logo/>
		{/* <!-- END PARTNER LOGO --> */}
		
		{/* <!-- START FOOTER --> */}
		<Footer/>
        {/* end footer */}
        </body>
    </>
  )
}
