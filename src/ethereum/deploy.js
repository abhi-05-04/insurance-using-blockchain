const HDWalletProvider =require('truffle-hdwallet-provider');
const Web3=require('web3');
const insurancefactory = require('./build/InsuranceFactory.json');

const provider=new HDWalletProvider(
	'work mosquito torch submit syrup toward remind inherit shock badge there tonight',
    'https://ropsten.infura.io/v3/54f7068c90b84254a8b83a5696a41317'
);

const web3=new Web3(provider);

const deploy=async()=>{
	const accounts=await web3.eth.getAccounts();
	console.log(accounts[0]);

	const result=await new web3.eth.Contract(JSON.parse(insurancefactory.interface))
	.deploy({data: insurancefactory.bytecode})
	.send({gas:'5000000',gasPrice:'60000000000',from:accounts[0]});

	console.log(insurancefactory.interface);
	console.log('addres == ',result.options.address);
};

deploy();