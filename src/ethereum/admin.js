import web3 from "./web3";
import insuranceFactory from './build/InsuranceFactory.json';


const instance =  new web3.eth.Contract(
    JSON.parse(insuranceFactory.interface) ,
    '0xC03eaAa801D19CF5270d23d41627D945bf861ff8'
);

export default instance;