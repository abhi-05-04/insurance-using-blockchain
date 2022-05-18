import web3 from "./web3";
import insurance from './build/Insurance.json';

const manufacturer = (address)=>{
    const instance =  new web3.eth.Contract(
        JSON.parse(insurance.interface) ,
        address
    );
    return instance;
}

export default manufacturer;