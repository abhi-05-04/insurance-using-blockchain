
import React, { useEffect, useState } from 'react';
// import { useState, useEffect } from 'react';
import 'mdb-ui-kit/css/mdb.min.css'; //cdd
import Insurance from '../../ethereum/insurance'
import web3 from '../../ethereum/web3';
import Insurancefactory from '../../ethereum/admin';
import Web3 from 'web3';
import axios from 'axios';
import {firebase} from './firebase'
function Healthinsurance() {

    // const webcall = async()=> {

    //   }
    var [name, setName] = useState();
    var [aadhar, setAadhar] = useState();
    var [email, setEmail] = useState();
    var [mobile, setMobile] = useState();
    var [nominee, setNominee] = useState();
    var [ether, setEther] = useState();
    var [aadharImg, setAadharImg] = useState();
    var [insurance, setInsurance] = useState();

    useEffect(() => {
        window.addEventListener('load', async function () {
            let accounts = await web3.eth.getAccounts();
            // let listofInsurence = await Insurancefactory.methods.getDeployedInsurances().call();
            console.log(await Insurancefactory.methods.getDeployedInsurances().call());
            setInsurance(Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[0]));
            // if((await insurance.methods.getDeployedInsurances().call()).length == 0)
            // {
            //   // await Insurancefactory.methods.createInsurance('Health Insurance',1,2).send({from: accounts[0]});
            //   // await Insurancefactory.methods.createInsurance('Life Insurance',2,3).send({from: accounts[0]});
            //   await Insurancefactory.methods.createInsurance('Car Insurance',3,4).send({from: accounts[0]});
            // }
            // console.log(await insurance.methods.getName().call());
        });
    })

    //   useEffect(()=>{
    //     webcall();
    //   },[])

    const getBase64 = async (e) => {
        
        const file = e.target.files[0];
        const image = file

        const filename = file.name;
        console.log(file)
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                console.log(xhr.response);
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', file, true);
            xhr.send(null);
        });
        console.log(blob);

        const metadata = {
            contentType: file.type,
        };
        const ref = firebase
            .storage()
            .ref()
            .child(filename);
        const snapshot = await ref.put(file, metadata);
        // We're done with the blob, close and release it
        // blob.close();
        const url = await snapshot.ref.getDownloadURL();
        // setUrl(url);
        setAadharImg(url);
        console.log(url);
    }

    const addMember = async () => {
        console.log(await insurance.methods.getName().call())
        try {
            const accounts = await web3.eth.getAccounts();
            await insurance.methods.contribute(name, aadhar, email, mobile, aadharImg, nominee).send({
                gas: '5000000', gasPrice: '60000000000', value: Web3.utils.toWei(ether, 'ether'), from: accounts[0]
            });
        }
        catch (err) {
            console.log(err);
            alert("Error while adding Member");
        }
    }

    // const getInsurance = async() =>{
    //     console.log(await insurance.methods.getName().call());
    // }

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
                                                    <input type="text" className="form-control" id="floatingInput" onChange={(event) => setName(event.target.value)} />
                                                    <label htmlFor="floatingInput">Name</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" onChange={(event) => setAadhar(event.target.value)} />
                                                    <label htmlFor="floatingInput">Aadhar Card</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" onChange={(event) => setEmail(event.target.value)} />
                                                    <label htmlFor="floatingInput">Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" onChange={(event) => setMobile(event.target.value)} />
                                                    <label htmlFor="floatingInput">Mobile Number</label>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="exampleFormControlFile1">Upload Aadhaar</label>
                                                    {/* <label htmlFor="exampleFormControlFile1">Upload Aadhaar</label> */}
                                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={getBase64} />
                                                </div>
                                                <br />
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" onChange={(event) => setNominee(event.target.value)} />
                                                    <label htmlFor="floatingInput">Nominee MetamaskID</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" onChange={(event) => setEther(event.target.value)} />
                                                    <label htmlFor="floatingInput">Ethers</label>
                                                </div>



                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={addMember}>Apply</button>
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

export default Healthinsurance;