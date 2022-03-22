import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css"
import "./About1.css"
import image1 from '../Images/home.png'
import image2 from '../Images/bg/bg2.jpg'
const styling = {
    backgroundImage: { image2 },
    // margin: "50px 0px",
    // backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
}

export default function About() {
    return (
        <div >
            <div id="home" className="blue-theme feature-single-body" >
                {/* <section className="space-100 " style={styling} > */}
                <section className="space-100 " style={{
                    backgroundImage: `url(${image2})`
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={image1}
                                    alt="Insurance image"
                                />
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <h2 className="title1 text-light">
                                    Blockchin-based Insurance to make it efficient than traditional  Method
                                </h2>
                                <p className="text-light">

                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eos veniam officia iure repudiandae, totam consequuntur numquam fugiat sint, quasi optio, incidunt nostrum? Similique aperiam accusamus iusto obcaecati quasi molestias.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-100  ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 text-right col-sm-push-6">
                                <span>
                                    <img src="/Images/HomePage/Automation.png" alt="Automation" />
                                </span>
                            </div>
                            <div className="col-sm-6 text-left col-sm-pull-6">
                                <div className="clearfix">
                                    <h3 className="title11">
                                        How This Works?
                                    </h3>
                                </div>
                                <ul className="checkmark-list">
                                    <li>
                                        first point
                                    </li>
                                    <li>
                                        second point
                                    </li>
                                    <li>
                                        third point
                                    </li>
                                    <li>
                                        fourth point
                                    </li>
                                    <li>sixth point</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-100 ">
                    <div className="container">
                        <div className="flex-row space-80 justify-content-between">
                            <div className="col-md-8">
                                <div className="pre-title">Features Highlights</div>
                                <h2 className="custom-title gray-text mt-0">
                                    Why Block-Insurance?
                                </h2>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="flex-row space-80">
                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center   ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/better.svg" alt="better" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Secure
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/time.svg" alt="time" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Decentralised
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img
                                            src="/Images/HomePage/instruction.svg"
                                            alt="instruction"
                                        />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Clear instructions{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/social.svg" alt="social" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            -----
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img
                                            src="/Images/HomePage/customer-feedback.svg"
                                            alt="feedback"
                                        />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            --------
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="icon-box-rounded">
                                        <img src="/Images/HomePage/maintain.svg" alt="maintain" />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            ----------
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}