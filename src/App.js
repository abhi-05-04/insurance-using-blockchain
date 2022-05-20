// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import React,{useEffect} from 'react';
import Insurance from './Screens/Insurance';
import Page404 from './Components/404';
import Portfolio from './Screens/portfolio';
import Healthinsurance from './Screens/Insurance/healthinsurance';
import Claim from './Screens/Insurance/claim';
// import InsuranceFactory from '../ethereum/admin'
import Insurancefactory from './ethereum/admin';

// import { Login, DRegister, HRegister, UDashboard, Donar, DashBoard, ADashboard, CDashboard, HomePage,Transplant } from "./Screens/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import web3 from './ethereum/web3';



function App() {
  const webcall = async()=> {
    let accounts = await web3.eth.getAccounts();
    // let listofInsurence = await Insurancefactory.methods.getDeployedInsurances().call();
    console.log((await Insurancefactory.methods.getDeployedInsurances().call()));
    if((await Insurancefactory.methods.getDeployedInsurances().call()).length == 0)
    {
      // await Insurancefactory.methods.createInsurance('Health Insurance',1,2).send({from: accounts[0]});
      // await Insurancefactory.methods.createInsurance('Life Insurance',2,3).send({from: accounts[0]});
      await Insurancefactory.methods.createInsurance('Car Insurance',3,4).send({from: accounts[0]});
    }
    console.log((await Insurancefactory.methods.getDeployedInsurances().call()).length);
  }
  
  useEffect(()=>{
    webcall();
  },[])
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='/insurance/healthinsurance' element={<Healthinsurance/>}/>
        <Route path='/insurance/claim' element={<Claim/>}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Nav></Nav>

    //   {/* <About></About> */}

    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //   </header> */}
    // </div>
  );
}

export default App;



