import React,{useEffect, useState} from 'react';
import Insurance from '../../ethereum/insurance'
import web3 from '../../ethereum/web3';
import Insurancefactory from '../../ethereum/admin';
import Web3 from 'web3';


// import { useState } from 'react';


export default function Claim() {

  var [image, setImage] = useState();
  var [describe, setDescribe] = useState();
  var [insurance, setInsurance] = useState();

  useEffect(() =>{
    window.addEventListener('load', async function() {
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

  const getBase64 = async(e) => {
    console.log(e.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
        console.log(reader.result);
        setImage(reader.result);
        // console.log(aadharImg)
        // document = reader.result;
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

const addClaim = async() =>{
  var flag=false;
  try{
      const accounts = await web3.eth.getAccounts();
      await insurance.methods.createClaim(describe,image).send({
        gas:'5000000',gasPrice:'60000000000',from: accounts[0]
      });
      // if(flag)
      // {
      //   alert("Claim Created Successfully");
      // }
      // else
      // {
      //   alert("Claim Creation Failed");
      // }
  }
  catch (err) {
      alert("Error while adding Member");
  }
}


  return (
    <div className='pt-100'>
      <div className='container mt-3'>
        <div class="form-group mt-3">
          <label for="exampleFormControlTextarea1">Add Description </label>
          <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3" onChange={(event) =>setDescribe(event.target.value)}/>
          {/* onChange={(e) => { setPrececription(e.target.value); }} */}
        </div>
        <div class="form-group mt-3">
          <label for="exampleFormControlFile1">Upload Proof:</label>
          <br />
          <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={getBase64}/>
        </div>
        {/* onClick={handleClick} */}
        <button type="button" class="btn btn-secondary mt-5 " onClick={addClaim} >Apply for claim</button>
      </div >
    </div>

  )
}