import React from 'react'
import Header from './Header'
import Feature from './Feature'
import Counter from './Counter'
import Chooseus from './Chooseus'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Promation from './Promation'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Search from './Search'
import Logo from './Logo'
import Footer from './Footer'
import SecondMainpage from './SecondMainpage'

export default function SecondHome() {
  return (
    <>
     <body data-spy="scroll" data-offset="80">

		 {/* <!-- START NAVBAR --> */}
		<Header/>
	   {/* <!-- END NAVBAR-->			 */}
	
		{/* <!-- START HOME --> */}
		<SecondMainpage/>
		{/* <!-- END  HOME -->	 */}

		{/* <!-- FEATURES --> */}
		<Feature/>
		{/* <!-- END FEATURES --> */}
		
		{/* <!-- START COUNTER --> */}
		<Counter/>
		{/* <!-- END COUNTER-->	 */}
		
		{/* <!-- START WHY CHOOSE US --> */}
		<Chooseus/>
		{/* <!-- END WHY CHOOSE US-->	 */}

		{/* <!-- START PORTFOLIO --> */}
		<Portfolio/>
		{/* <!-- END PORTFOLIO -->		 */}

		{/* <!-- SKILLS --> */}
		<Skills/>
		{/* <!-- END SKILLS --> */}
		
		{/* <!-- PROMOTIONAL AREA --> */}
		<Promation/>
		{/* <!-- END PROMOTIONAL AREA --> */}
		
		{/* <!-- TESTIMONIALS --> */}
		<Testimonials/>
		{/* <!-- END TESTIMONIALS -->	 */}

		{/* <!-- BLOG --> */}
		<Blog/>
		{/* <!-- END BLOG -->		 */}
		
		{/* <!-- CONTACT --> */}
		<Search/>
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
