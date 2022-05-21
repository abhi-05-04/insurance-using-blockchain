import web3 from "./web3";
import insuranceFactory from './build/InsuranceFactory.json';


const instance =  new web3.eth.Contract(
    JSON.parse(insuranceFactory.interface) ,
    '0xCE7252F859Ba5387784Df354527ebd5B02AbffF6'
);

export default instance;