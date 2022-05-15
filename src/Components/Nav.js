import React from 'react'
import "./nav.css"
export default function Nav() {
        return (
                <>
                        <header className="header-area fixed-top">
                                <div id="navbar" className="navbar-area is-sticky">
                                        <div className="main-nav">
                                                <nav className="navbar navbar-expand-lg navbar-light">
                                                        <div className="container"><a className="navbar-brand" href="/">
                                                                <img
                                                                        src="./Flexa - React Next Insurance &amp; Finance Company Template_files/logo.png"
                                                                        alt="logo" /></a><button className="navbar-toggler navbar-toggler-right" type="button"
                                                                                data-toggle="collapse" data-target="#navbarSupportedContent"
                                                                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                                                                aria-label="Toggle navigation"><span className="icon-bar top-bar"></span><span
                                                                                        className="icon-bar middle-bar"></span><span
                                                                                                className="icon-bar bottom-bar"></span></button>
                                                                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                                                        <ul className="navbar-nav m-auto">
                                                                                <li className="nav-item"><a className="nav-link"
                                                                                        href="/">Home <i
                                                                                                className="bx bx-chevron-down"></i></a>
                                                                                        {/* <ul className="dropdown-menu">
                                                                                                <li className="nav-item"><a className="nav-link active"
                                                                                                        href="/">Home One</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/index2">Home Two</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/index3">Home Three</a></li>
                                                                                        </ul> */}
                                                                                </li>
                                                                                <li className="nav-item"><a className="nav-link"
                                                                                        href="/#About">About</a></li>
                                                                                {/* <li className="nav-item"><a className="nav-link"
                                                                                        href="/#">Pages <i
                                                                                                className="bx bx-chevron-down"></i></a> */}
                                                                                        {/* <ul className="dropdown-menu">
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/team">Team</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/pricing">Pricing</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/testimonials">Testimonials</a>
                                                                                                </li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/#">User <i
                                                                                                                className="bx bx-chevron-down"></i></a>
                                                                                                        <ul className="dropdown-menu">
                                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                                        href="/sign-up">Sign Up</a>
                                                                                                                </li>
                                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                                        href="/sign-in">Sign In</a>
                                                                                                                </li>
                                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                                        href="/recover-password">Recover
                                                                                                                        Password</a></li>
                                                                                                        </ul>
                                                                                                </li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/faq">FAQ</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/coming-soon">Coming Soon</a>
                                                                                                </li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/terms-conditions">Terms
                                                                                                        &amp; Conditions</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/privacy-policy">Privacy
                                                                                                        Policy</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/404">404 Error Page</a></li>
                                                                                        </ul> */}
                                                                                {/* </li> */}
                                                                                <li className="nav-item"><a className="nav-link"
                                                                                        href="/#Insurance">Insurance <i
                                                                                                className="bx bx-chevron-down"></i></a>
                                                                                        {/* <ul className="dropdown-menu">
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/travel-insurance">Travel
                                                                                                        Insurance</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/business-insurance">Business
                                                                                                        Insurance</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/health-insurance">Health
                                                                                                        Insurance</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/car-insurance">Car
                                                                                                        Insurance</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/insurance-details">Insurance
                                                                                                        Details</a></li>
                                                                                        </ul> */}
                                                                                </li>
                                                                                <li className="nav-item"><a className="nav-link"
                                                                                        href="/#">Portfolio <i
                                                                                                className="bx bx-chevron-down"></i></a>
                                                                                        {/* <ul className="dropdown-menu">
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/portfolio-columns-two">Portfolio
                                                                                                        Columns Two</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/portfolio-columns-three">Portfolio
                                                                                                        Columns Three</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/portfolio-columns-four">Portfolio
                                                                                                        Columns Four</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/portfolio-details">Portfolio
                                                                                                        Details</a></li>
                                                                                        </ul> */}
                                                                                </li>
                                                                                {/* <li className="nav-item"><a className="nav-link"
                                                                                        href="/#">Blog <i
                                                                                                className="bx bx-chevron-down"></i></a> */}
                                                                                        {/* <ul className="dropdown-menu">
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/blog-grid">Blog Grid</a>
                                                                                                </li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/blog-left-sidebar">Blog Left
                                                                                                        Sidebar</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/blog-right-sidebar">Blog
                                                                                                        Right Sidebar</a></li>
                                                                                                <li className="nav-item"><a className="nav-link"
                                                                                                        href="/blog-details">Blog
                                                                                                        Details</a></li>
                                                                                        </ul> */}
                                                                                {/* </li> */}
                                                                                <li className="nav-item"><a className="nav-link"
                                                                                        href="/#Contact">Contact</a></li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </nav>
                                        </div>
                                </div>
                        </header>
                </>
        )
}
