// import React, { useEffect } from 'react'
import Header from "./Header";
import Feature from "./Feature";
import Counter from "./Counter";
import Portfolio from "./Portfolio";
import Promation from "./Promation";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Logo from "./Logo";
import Footer from "./Footer";
import Chooseus from "./Chooseus";
import Skills from "./Skills";
import MainPage from "./MainPage";

export default function Home() {
      
    return (
        <>

            <body data-spy="scroll" data-offset="80">

             
                {/* <!-- END PRELOADER -->		 */}
                 {/* <Header */}
               <Header/>
                 {/* end header */}
                {/* <!-- START HOME --> */}
               <MainPage/>
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
                
                
                {/* <!-- END CONTACT -->		 */}

                {/* <!-- START PARTNER LOGO --> */}
                <Logo/>
                {/* <!-- END PARTNER LOGO --> */}

                {/* <!-- START FOOTER --> */}
                <Footer/>
            </body>
        </>
    )
}
