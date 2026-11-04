import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <>
            {/* <!-- START NAVBAR --> */}
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-xl-2">
                            <h1 className="mb-0 site-logo"><a href="index.html"><img src="assets/img/logo.png" alt="" /></a></h1>
                        </div>
                        <div className="col-12 col-md-10 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li className="has-children">
                                        <a href="/home" className="nav-link">Home</a>
                                        <ul className="dropdown">
                                            <li><a href="secondhome" className="nav-link">Home Two</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link" href="/about">About</a></li>
                                    <li className="has-children">
                                        <a href="/service" className="nav-link">Services</a>
                                        <ul className="dropdown">
                                            <li><a href="/email" className="nav-link">Email Marketing</a></li>
                                            <li><a href="/seo" className="nav-link">Offline SEO</a></li>
                                            <li><a href="/socialmedia" className="nav-link">Social media marketing</a></li>
                                            <li><a href="/lead" className="nav-link">Lead Generation</a></li>
                                            <li><a href="/web" className="nav-link">Web Design</a></li>
                                            <li><a href="/searchengine" className="nav-link">Search Engine optimization</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link" href="/casestudy">Case Study</a></li>
                                    <li className="has-children">
                                        <a href="/portfolio" className="nav-link">Portfolio</a>
                                        <ul className="dropdown">
                                            <li><a href="/galleryPortfolio" className="nav-link">Portfolio Gallery</a></li>
                                            <li><a href="/singleproject" className="nav-link">Single Project</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <button type="button" className="nav-link"> Pages</button>
                                        <ul className="dropdown">

                                            <li><a href="/team" className="nav-link">Team Member</a></li>
                                            <li><a href="/price" className="nav-link">Pricing</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="/popularblog" className="nav-link">Blog</a>
                                        <ul className="dropdown">
                                            <li><a href="/sliderblog" className="nav-link">Blog With Sidebar</a></li>
                                            <li><a href="/blogsingleproject" className="nav-link">Single Blog</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link" href="/contact">Contact</a></li>

                                </ul>
                                <div className="auth-buttons">
                                    <a href="/login" className="auth-btn">Login</a>

                                </div>
                            </nav>
                        </div>
                        <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{ position: "relative", top: "3px" }}>
                            <button type="button" className="site-menu-toggle js-menu-toggle float-right">
                                <span className="icon-menu h3"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- END NAVBAR-->				 */}
        </>
    )
}
