import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Counter from './Counter'
// import Feature from './Feature'
import Header from './Header'
import PopularAbout from './PopularAbout'
import Team from './Team'
import AboutHireus from './AboutHireus'
import PopularFeature from './PopularFeature'

export default function About() {
  return (
 <>
  <body data-spy="scroll" data-offset="80">

		 {/* <!-- START NAVBAR --> */}
		<Header/>
	   {/* <!-- END NAVBAR-->								 */}
		
		{/* <!-- START SECTION TOP --> */}
		<section className="section-top" style={{backgroundImage: "url(assets/img/bg/section-top.png)",backgroundSize:"cover", backgroundPosition: "center center"}}>
			<div className="container">
				<div className="row">
				  <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
					<div className="section-top-title">
						<h1>About us</h1>		
					</div>
				  </div>				  
				</div>
			</div>
		</section>
		{/* <!-- END SECTION TOP --> */}

		{/* <!-- ABOUT PAGE --> */}
		<PopularAbout/>
		{/* <!-- END ABOUT PAGE --> */}
		
		{/* <!-- FEATURES --> */}
		<PopularFeature/>
		{/* <!-- END FEATURES --> */}
		
		{/* <!-- START COUNTER --> */}
		<Counter/>
		{/* <!-- END COUNTER-->	 */}

		{/* <!-- START TEAM MEMBERS --> */}
		<Team/>
		{/* <!-- END TEAM MEMBERS -->		 */}
		
		{/* <!-- HIRE US --> */}
		<AboutHireus/>
		{/* <!-- END HIRE US --> */}
		
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
