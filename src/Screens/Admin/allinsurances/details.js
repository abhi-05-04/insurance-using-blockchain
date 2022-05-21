import React, { useEffect, useState } from 'react'
import Insurance from '../../../ethereum/insurance'
import web3 from '../../../ethereum/web3';
import Insurancefactory from '../../../ethereum/admin';
// import Web3 from 'web3';
import Cookies from 'js-cookie';
export default function Details() {

    var [tmp1, setTemp1] = useState();
    var [insurance, setInsurance] = useState();
    useEffect(() => {
        window.addEventListener('load', async function () {
            // let accounts = await web3.eth.getAccounts();
            console.log(await Insurancefactory.methods.getDeployedInsurances().call());
            const tmpInsurance = Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[Cookies.get('id')]);
            setInsurance(tmpInsurance);
            setTemp1(await tmpInsurance.methods.getMembers(Cookies.get('data')).call());
            console.log((await tmpInsurance.methods.getMembers(Cookies.get('data')).call()));
        });
    })

    return (
        <div style={{ paddingTop: 80 }}>
            {
                (tmp1 != undefined && tmp1[0] != "") ?
                    <div class="card mb-3 text-center">
                        <div class="card-body">
                            <h5 class="card-title">Name: {tmp1[0]}</h5>
                            <p class="card-text">Aadhar Card: {tmp1[1]}</p>
                            <p class="card-text">Email: {tmp1[2]}</p>
                            <p class="card-text">Mobile No: {tmp1[3]}</p>
                            <p class="card-text">Nominee Metamask: {tmp1[5]}</p>
                            <p class="card-text">Ethers: {tmp1[6]}</p>
                            <p class="card-text">Aadhar Id</p>
                            <img src={tmp1[4]} class="card-img-top" alt="..." />
                        </div>

                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}