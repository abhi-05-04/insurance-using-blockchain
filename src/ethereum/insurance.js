import web3 from "./web3";
import Insurance from './build/Insurance.json';

const insurance = (address)=>{
    const instance =  new web3.eth.Contract(
        JSON.parse(Insurance.interface) ,
        address
    );
    return instance;
}

export default insurance;