[
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "approveClaim",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renewInsurence",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "members",
		"outputs": [
			{
				"name": "memberMetaMask",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "aadhar",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "mobile",
				"type": "string"
			},
			{
				"name": "aadharId",
				"type": "string"
			},
			{
				"name": "nomineeMetaMask",
				"type": "address"
			},
			{
				"name": "ethers",
				"type": "uint256"
			},
			{
				"name": "claimed",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "descriptondoc",
				"type": "string"
			},
			{
				"name": "receipent",
				"type": "address"
			}
		],
		"name": "createClaim",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minAmmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "claimPercentage",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "finalizeClaim",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "approversCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "claims",
		"outputs": [
			{
				"name": "descriptondoc",
				"type": "string"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "complete",
				"type": "bool"
			},
			{
				"name": "approve",
				"type": "bool"
			},
			{
				"name": "approvalCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "aadhar",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "mobile",
				"type": "string"
			},
			{
				"name": "aadharId",
				"type": "string"
			},
			{
				"name": "nomineeName",
				"type": "address"
			}
		],
		"name": "contribute",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "minimum",
				"type": "uint256"
			},
			{
				"name": "claimPer",
				"type": "uint256"
			},
			{
				"name": "creator",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]