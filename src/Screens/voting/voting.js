import React, { useEffect, useState } from 'react'
import Insurance from '../../ethereum/insurance'
import web3 from '../../ethereum/web3';
import Insurancefactory from '../../ethereum/admin';
// import Web3 from 'web3';
import Cookies from 'js-cookie';
export default function Healthvoting() {

    var [tmp1, setTemp1] = useState();
    var [insurance, setInsurance] = useState();
    useEffect(() => {
        window.addEventListener('load', async function () {
            // let accounts = await web3.eth.getAccounts();
            console.log(await Insurancefactory.methods.getDeployedInsurances().call());
            const tmpInsurance = Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[Cookies.get('id')]);
            setInsurance(tmpInsurance);
            setTemp1(await tmpInsurance.methods.getClaim(Cookies.get('data')).call());
            console.log((await tmpInsurance.methods.getClaim(Cookies.get('data')).call()));
        });
    })

    const vote = async () => {
        const accounts = await web3.eth.getAccounts();
        await insurance.methods.vote(tmp1[4]).send({
            from: accounts[0]
        });
    }

    return (
        <div style={{ paddingTop: 80 }}>
            {
                (tmp1 != undefined && tmp1[0] !="") ?
                    <div class="card mb-3 text-center">
                        <div class="card-body">
                            <h5 class="card-title">{tmp1[3]}</h5>
                            <p class="card-text">{tmp1[0]}</p>
                            <img src={tmp1[1]} class="card-img-top" alt="..." />
                            <br />
                            <br />
                            <div className='row'>
                                <div className='col'>
                                    <a onClick={vote} class="btn btn-primary">IN Favor</a>
                                </div>
                                <div className='col'>
                                    <a href="/insurance/lifeinsurance" class="btn btn-primary">Not In Favor</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}