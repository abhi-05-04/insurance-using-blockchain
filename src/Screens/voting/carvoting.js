import React, { useEffect, useState } from 'react'
import Insurance from '../../ethereum/insurance'
import web3 from '../../ethereum/web3';
import { Link } from 'react-router-dom';
import Insurancefactory from '../../ethereum/admin';
import Web3 from 'web3';
import Cookies from 'js-cookie';
export default function Carvoting() {

    var [tmp1, setTemp1] = useState();

    useEffect(() => {
        window.addEventListener('load', async function () {
            let accounts = await web3.eth.getAccounts();
            console.log(await Insurancefactory.methods.getDeployedInsurances().call());
            const tmpInsurance = Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[2]);
            setTemp1(await tmpInsurance.methods.getClaimList(1).call());
            console.log((await tmpInsurance.methods.getClaimList(1).call()));
        });
    })
    const traverse = async(id,data) => {
        Cookies.set('id',id);
        Cookies.set('data',data);
        
    }
    return (
        <div style={{ paddingTop: 80 }}>
            {
                tmp1 != undefined ? tmp1.map((data, index) => {
                    return (
                        <div class="card mb-3 text-center">
                            <div class="card-body">
                                {/* <Link
                                    to={{
                                        pathname: "/voting/livevoting",
                                        state: {id: '0', add:data } // your data array of objects
                                    }}
                                >
                                    {data}
                                </Link> */}
                                <a onClick={traverse(0,data)} href="/voting/livevoting">{data}</a>
                            </div>

                        </div>
                    )
                }) : ""
            }
        </div>
    )
}