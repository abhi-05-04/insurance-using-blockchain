import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css"
import "./About1.css"
import image1 from '../Images/home.png'
import image2 from '../Images/3567801.jpg'
import bg from '../Images/bg/bg2.jpg'
import securei from '../Images/svg/secure.svg'
import Decentralisedi from '../Images/svg/Decentralised.svg'
import clearinstructioni from '../Images/svg/clearinstruction.svg'


// const styling = {
//     backgroundImage: { bg },
//     // margin: "50px 0px",
//     // backgroundSize: "100%",
//     backgroundRepeat: "no-repeat",
// }

export default function About() {

    return (
        <div >
            <div id="home" className="blue-theme feature-single-body" >
                {/* <section className="space-100 " style={styling} > */}
                <section className="space-100 " style={{
                    backgroundImage: `url(${bg})`,
                    marginTop: '73px'
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
                                <p className="text-light" >

                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eos veniam officia iure repudiandae, totam consequuntur numquam fugiat sint, quasi optio, incidunt nostrum? Similique aperiam accusamus iusto obcaecati quasi molestias.
                                </p>
                            </div >
                            <div id="About">

                            </div>
                        </div>
                    </div>
                </section>
                <section className="" >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 text-right col-sm-push-6">
                                <span>
                                    <img src={image2} alt="Automation" />
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
                <section className="" id="Insurance">
                    <div className="container">
                        <div className="flex-row space-80 justify-content-between">
                            <div className="col-md-8">
                                <div className="pre-title">Explore</div>
                                <h2 className="custom-title gray-text mt-0">
                                    Insurnce
                                </h2>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="flex-row space-80">
                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center">
                                    <div className="card">
                                        {/* style="width: 18rem;" */}
                                        <img className="card-img-top" src={image1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Life Insurance</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            {/* <a href="#" className="btn btn-primary">View Details</a> */}

                                            {/* <!-- Button trigger modal --> */}
                                            <div className="modal" tabIndex="-1">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Modal title</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Modal body text goes here.</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                View Details
                                            </button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="card">
                                        {/* style="width: 18rem;" */}
                                        <img className="card-img-top" src={image1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Health Insurance</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="card">
                                        {/* style="width: 18rem;" */}
                                        <img className="card-img-top" src={image1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="card">
                                        {/* style="width: 18rem;" */}
                                        <img className="card-img-top" src={image1} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                    </div>
                </section>


                <section className="">
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
                                        <img src={securei} alt="secure" width={60} />
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
                                        <img src={Decentralisedi} alt="Decentralised" width={60} />
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
                                            src={clearinstructioni}
                                            alt="instruction"
                                            width={60}
                                        />
                                    </div>
                                    <div className="content-col mb-0">
                                        <div className="sub_title_small gray-text">
                                            Clear instructions
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
                                        <img src="/Images/svg/maintain.svg" alt="maintain" />
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