import web3 from "./web3";
import insuranceFactory from './build/InsuranceFactory.json';


const instance =  new web3.eth.Contract(
    JSON.parse(insuranceFactory.interface) ,
    '0xbAE54d262dE2de8e0803970247DAccc7504BD18D'
);

export default instance;