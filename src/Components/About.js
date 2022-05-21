import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css"
import "./About1.css"
import home from '../Images/home.png'
import image1 from '../Images/hi.jpeg'
import image21 from '../Images/li.jpeg'
import image31 from '../Images/ci.jpeg'
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
                                    src={home}
                                    alt="Insurance image"
                                />
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <h2 className="title1 text-light">
                                    Blockchin-based Insurance to make it efficient than traditional  Method
                                </h2>
                                <p className="text-light" >
                                    In current insurance industry the insuarance system is centralized i.e. only the manager can allocate the funds after the claim but in our system there will be a voting held after the claim and on the basis of results of voting the money will be allocated so the policy holders have more control over the assets than the traditional Method
                                    also in our system we are accepting payment through the ether not like current industry so we are providing a safer way to invest in crypto-currency  
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
                                        for application for the insuarance the user have to submit the credentials.
                                    </li>
                                    <li>
                                        for claim of the insuarance the user has to submit the documents regarding the claim,
                                    </li>
                                    <li>
                                        The manager will go through all the documents and examine them if he authorises the docs.
                                    </li>
                                    <li>
                                        There will be a voting session of 2 days for all the participants who have suscribed the insuarance policy if the result of the voting is more than 50% positive then the funds will be allocated to the claimer/recepient.  
                                    </li>
                                    <li>
                                        if any condition above fails no money will be allocated to any subscriber.
                                    </li>
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
                                        <img className="card-img-top" src={image21} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Health Insurance</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/insurance" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            <div className="col-md-6 mb-4">
                                <div className="flex align-items-center  ">
                                    <div className="card">
                                        {/* style="width: 18rem;" */}
                                        <img className="card-img-top" src={image31} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Life Insurance</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/insurance/lifeinsuranceinfo" className="btn btn-primary">View Details</a>
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
                                            <h5 className="card-title">Car Insurance</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/insurance/carinsuranceinfo" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}

                            
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
{/* 
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
                            </div> */}
                            {/* <!--end col--> */}

                            {/* <div className="col-md-6 mb-4">
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
                            </div> */}
                            {/* <!--end col--> */}

                            {/* <div className="col-md-6 mb-4">
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
                            </div> */}
                            {/* <!--end col--> */}
                        </div>
                    </div>
                </section>
                <section id="Contact">
                    {/* <!-- Footer --> */}
                    <footer className="page-footer font-small teal pt-4">

                        <div className="footer-copyright text-center py-3">© 2022 Copyright: 
                            <a href="/"> 2019BTECS00071,2019BTECS00064,2019BTECS00070</a>
                        </div>
                        {/* <!-- Copyright --> */}

                    </footer>
                    {/* <!-- Footer --> */}
                </section>

            </div>

        </div>
    );
}   