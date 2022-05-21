import React, { useEffect, useState } from 'react'
import Insurance from '../../ethereum/insurance'
import web3 from '../../ethereum/web3';
import Insurancefactory from '../../ethereum/admin';
import Web3 from 'web3';

export default function Portfolio() {

  var [tmp1, setTemp1] = useState();
  var [tmp2, setTemp2] = useState();
  var [tmp3, setTemp3] = useState();

  useEffect(() => {
    window.addEventListener('load', async function () {
      let accounts = await web3.eth.getAccounts();
      // let listofInsurence = await Insurancefactory.methods.getDeployedInsurances().call();
      console.log(await Insurancefactory.methods.getDeployedInsurances().call());
      const tmpInsurance = Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[0]);
      // setInsurance1(Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[0]));
      // setInsurance2(Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[1]));
      // setInsurance3(Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[2]))
      setTemp1((await tmpInsurance.methods.getMembers(accounts[0]).call()));
      console.log((await tmpInsurance.methods.getMembers(accounts[0]).call()));
      const tmpInsurance1 = Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[1]);
      setTemp2((await tmpInsurance1.methods.getMembers(accounts[0]).call()));
      console.log((await tmpInsurance1.methods.getMembers(accounts[0]).call()));
      const tmpInsurance2 = Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[2]);
      setTemp3((await tmpInsurance2.methods.getMembers(accounts[0]).call()));
      console.log((await tmpInsurance2.methods.getMembers(accounts[0]).call()));
    });
})
return (
  <div style={{ paddingTop: 80 }}>
  {
    (tmp1 != undefined && tmp1[0] != "") ?
      <div class="card mb-3 text-center">
        <div class="card-body">
          <h5 class="card-title">Health Insurance</h5>
          <a href="/voting/healthvoting" class="btn btn-primary">Voting</a>
        </div>

      </div>
    :
    <div></div>
  }
  {
    (tmp2 != undefined && tmp2[0] != "")?
      <div class="card mb-3 text-center">
        <div class="card-body">
          <h5 class="card-title">Life Insurance</h5>
          <a href="/insurance/lifeclaim" class="btn btn-primary">Voting</a>
        </div>

      </div>
    :
    <div></div>
  }
  {
    (tmp3 != undefined && tmp3[0] != "") ?
      <div class="card mb-3 text-center">
        <div class="card-body">
          <h5 class="card-title">Car Insurance</h5>
          <a href="/insurance/carclaim" class="btn btn-primary">Voting</a>
        </div>

      </div>
    :
    <div></div>
  }
  </div>
)
}