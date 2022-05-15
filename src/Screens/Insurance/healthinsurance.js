
import React from 'react'
import { useState, useEffect } from 'react'
import 'mdb-ui-kit/css/mdb.min.css'; //cdd



export default function healthinsurance() {






    return (
        <div style={{ paddingTop: 75 }}>
            <section className="h-100 gradient-form">
                <div className="container py-1 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col-xl-10" >
                            <div className="card rounded-3 text-black" style={{ background: "#D4F8E8" }} >
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                {/* <img src=""
                                                    alt="logo" /> */}
                                                <h4 className="mt-1 mb-5 pb-1">Apply</h4>
                                            </div>
                                            <form>
                                                <p class="text-uppercase">Your Applying Metamask id : </p>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" />
                                                    <label htmlFor="floatingInput">Name</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" />
                                                    <label htmlFor="floatingInput">Aadhar Card</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" />
                                                    <label htmlFor="floatingInput">Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" />
                                                    <label htmlFor="floatingInput">Mobile Number</label>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="exampleFormControlFile1">Upload Aadhaar</label>
                                                    {/* <label htmlFor="exampleFormControlFile1">Upload Aadhaar</label> */}
                                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                                </div>
                                                <br />
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" />
                                                    <label htmlFor="floatingInput">Nominee MetamaskID</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" />
                                                    <label htmlFor="floatingInput">Ethers</label>
                                                </div>



                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Apply</button>
                                                </div>


                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">Health Insurance</h4>
                                            <p className="small text-dark mb-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat saepe officia, dignissimos doloribus veritatis fugit facere molestias perferendis nihil dolorum ut ex alias minima nobis similique dolores neque officiis!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
