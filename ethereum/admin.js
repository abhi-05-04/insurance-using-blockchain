import web3 from "./web3";
import insuranceFactory from './build/InsuranceFactory.json';


const instance =  new web3.eth.Contract(
    JSON.parse(insuranceFactory.interface) ,
    '0x48777839cF01fb3De1566167Eb35305DCeB3e28f'
);

export default instance;