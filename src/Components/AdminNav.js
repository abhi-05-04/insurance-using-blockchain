import React from 'react'
import "./nav.css"
export default function AdminNav() {
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
                                            href="/admin">Home <i
                                                className="bx bx-chevron-down"></i></a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link"
                                            href="/#About">ongoing voting</a></li>

                                        <li className="nav-item"><a className="nav-link"
                                            href="/#Insurance">Insurance <i
                                                className="bx bx-chevron-down"></i></a>

                                        </li>   

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
