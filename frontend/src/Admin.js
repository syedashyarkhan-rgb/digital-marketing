import { useContext } from "react";
// import { AuthProvider, useAuth } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
// import "./templatemo-glass-admin-style.css"

export default function Admin() {
    const navigate = useNavigate()

    // const {logout} = useAuth()
    // const {logout} = AuthProvider()
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
        navigate("/login")
    }
    return (
        <>
            <h2> Welcome to User Admin  Page</h2>
            <Link to={"/test"}>TEST</Link>
            <button onClick={handleLogout}>Logout</button>



            <div className="dashboard-page">
                <div className="background"></div>
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>

                <div className="dashboard">

                    <aside className="sidebar" id="sidebar">
                        <div className="sidebar-header">
                            <div className="logo">G</div>
                            <span className="logo-text">GlassDash</span>
                        </div>

                        <ul className="nav-menu">
                            <li className="nav-section">
                                <span className="nav-section-title">Main Menu</span>
                                <ul>
                                    <li className="nav-item">
                                        <a href="index.html" className="nav-link active">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                                <rect x="14" y="14" width="7" height="7" rx="1" />
                                            </svg>
                                            Dashboard
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/thome" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tfeature" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Feature
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tcounter" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Counter
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tvideo" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Video
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/tchoose" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Choose
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/tgportfolio" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            GalleryPortfolio
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tskills" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Skills
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tpromation" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Promation
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/ttest" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Testimonial
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tblog" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Blog
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tsecondhome" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            SecondHome
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tabout" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            About
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tteam" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Team
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tservice" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Service
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tprice" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Price
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/temail" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Email
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tseo" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Seo
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tsocial" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            SocialMedia
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tlead" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            LeadGeneration
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tweb" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            WebDesign
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tsearchengine" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            searchEngine
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tmarket" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Market
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tcasestudy" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            CaseStudy
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tcasecontent" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            CaseContent
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tportfolio" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            portfolio
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tsingleproject" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            SingleProject
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tsliderblog" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            SliderBlog
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tsingleblog" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            SingleBlog
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tauther" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Auther
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/tcomment" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Comment
                                        </a>
                                    </li>

                                    <h2 style={{ color: "red" }}>Add Content</h2>

                                    <li className="nav-item">
                                        <a href="/addhome" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Home
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addfeature" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Feature
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addcounter" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Counter
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addvideo" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Video
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addchoose" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Choose
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addgallery" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Gallery
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addskills" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Skills
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addpromation" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Promation
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addtest" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Testimonial
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addblog" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Blog
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addhome2" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Second home
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addabout" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add About
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addteam" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Team
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addservice" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Service
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addprice" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Price
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addEmail" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Email
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addseo" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Seo
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addmedia" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Media
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addlead" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add LeadGeneration
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addwebdesign" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add WebDesign
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addsearchengine" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add SearchEngine
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addmarket" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Market
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addcasestudy" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add CaseStudy
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addcasecontent" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add CaseContent
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addportfolio" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Portfolio
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addsingleproj" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add SingleProject
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addslidebar" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Sliderbar
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addsingleblog" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add SingleBlog
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addauther" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Auther
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/addcomment" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                                            </svg>
                                            Add Comment
                                        </a>
                                    </li>



                                </ul>
                            </li>

                            <li className="nav-section">
                                <span className="nav-section-title">Account</span>
                                <ul>
                                    <li className="nav-item">
                                        <a href="login.html" className="nav-link">
                                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                <polyline points="16 17 21 12 16 7" />
                                                <line x1="21" y1="12" x2="9" y2="12" />
                                            </svg>
                                            <button onClick={handleLogout}>Logout</button>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="sidebar-footer">
                            <div className="user-profile">
                                <div className="user-avatar">TM</div>
                                <div className="user-info">
                                    <div className="user-name">TemplateMo</div>
                                    <div className="user-role">Administrator</div>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                    </aside>


                    <main className="main-content">

                        <nav className="navbar">
                            <h1 className="page-title">Dashboard Overview</h1>
                            <div className="navbar-right">
                                <div className="search-box">
                                    <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                    <input type="text" className="search-input" placeholder="Search anything..." />
                                </div>
                                <button className="nav-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                    </svg>
                                    <span className="notification-dot"></span>
                                </button>
                                <button className="nav-btn" id="theme-toggle" title="Toggle Light/Dark Mode">
                                    <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M12 2v2" /><path d="M12 20v2" />
                                        <path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" />
                                        <path d="M2 12h2" /><path d="M20 12h2" />
                                        <path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" />
                                    </svg>
                                    <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'none' }}>
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                </button>
                            </div>
                        </nav>


                        <section className="stats-grid">
                            <div className="glass-card glass-card-3d stat-card">
                                <div className="stat-card-inner">
                                    <div className="stat-info">
                                        <h3>Total Revenue</h3>
                                        <div className="stat-value">$84,254</div>
                                        <span className="stat-change positive">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                                            +12.5%
                                        </span>
                                    </div>
                                    <div className="stat-icon cyan">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--emerald-light)" strokeWidth="2">
                                            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card glass-card-3d stat-card">
                                <div className="stat-card-inner">
                                    <div className="stat-info">
                                        <h3>Active Users</h3>
                                        <div className="stat-value">24,521</div>
                                        <span className="stat-change positive">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                                            +8.2%
                                        </span>
                                    </div>
                                    <div className="stat-icon magenta">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card glass-card-3d stat-card">
                                <div className="stat-card-inner">
                                    <div className="stat-info">
                                        <h3>Total Orders</h3>
                                        <div className="stat-value">8,461</div>
                                        <span className="stat-change negative">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /></svg>
                                            -3.1%
                                        </span>
                                    </div>
                                    <div className="stat-icon purple">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2">
                                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card glass-card-3d stat-card">
                                <div className="stat-card-inner">
                                    <div className="stat-info">
                                        <h3>Conversion Rate</h3>
                                        <div className="stat-value">3.24%</div>
                                        <span className="stat-change positive">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                                            +2.4%
                                        </span>
                                    </div>
                                    <div className="stat-icon success">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </section>



                    </main>
                </div>


                <button className="mobile-menu-toggle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>


                <footer className="site-footer">
                    <p>Copyright © 2026 Your Company. Designed by <a href="https://templatemo.com" target="_blank" rel="nofollow noreferrer">TemplateMo</a></p>
                </footer>
            </div>
        </>
    )
}
