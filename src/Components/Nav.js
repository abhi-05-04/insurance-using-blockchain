import React from 'react'
import "./nav.css"
export default function Nav() {
    return (
       <>
       <header class="header-area fixed-top">
            <div id="navbar" class="navbar-area is-sticky">
                <div class="main-nav">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container"><a class="navbar-brand" href="/">
                            <img
                                    src="./Flexa - React Next Insurance &amp; Finance Company Template_files/logo.png"
                                    alt="logo" /></a><button class="navbar-toggler navbar-toggler-right" type="button"
                                data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation"><span class="icon-bar top-bar"></span><span
                                    class="icon-bar middle-bar"></span><span
                                    class="icon-bar bottom-bar"></span></button>
                            <div class="collapse navbar-collapse show" id="navbarSupportedContent">
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item"><a class="nav-link"
                                            href="/#">Home <i
                                                class="bx bx-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link active"
                                                    href="/">Home One</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/index2">Home Two</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/index3">Home Three</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/about">About</a></li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/#">Pages <i
                                                class="bx bx-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/team">Team</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/pricing">Pricing</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/testimonials">Testimonials</a>
                                            </li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/#">User <i
                                                        class="bx bx-chevron-down"></i></a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item"><a class="nav-link"
                                                            href="/sign-up">Sign Up</a>
                                                    </li>
                                                    <li class="nav-item"><a class="nav-link"
                                                            href="/sign-in">Sign In</a>
                                                    </li>
                                                    <li class="nav-item"><a class="nav-link"
                                                            href="/recover-password">Recover
                                                            Password</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/faq">FAQ</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/coming-soon">Coming Soon</a>
                                            </li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/terms-conditions">Terms
                                                    &amp; Conditions</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/privacy-policy">Privacy
                                                    Policy</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/404">404 Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/#">Insurance <i
                                                class="bx bx-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/travel-insurance">Travel
                                                    Insurance</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/business-insurance">Business
                                                    Insurance</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/health-insurance">Health
                                                    Insurance</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/car-insurance">Car
                                                    Insurance</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/insurance-details">Insurance
                                                    Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/#">Portfolio <i
                                                class="bx bx-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/portfolio-columns-two">Portfolio
                                                    Columns Two</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/portfolio-columns-three">Portfolio
                                                    Columns Three</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/portfolio-columns-four">Portfolio
                                                    Columns Four</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/portfolio-details">Portfolio
                                                    Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/#">Blog <i
                                                class="bx bx-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/blog-grid">Blog Grid</a>
                                            </li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/blog-left-sidebar">Blog Left
                                                    Sidebar</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/blog-right-sidebar">Blog
                                                    Right Sidebar</a></li>
                                            <li class="nav-item"><a class="nav-link"
                                                    href="/blog-details">Blog
                                                    Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/contact">Contact</a></li>
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
