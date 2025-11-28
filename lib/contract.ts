export const contractAddress = "0x130d8899d37053a566c974c8138A64e24648a07D";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "student",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "grade",
						"type": "uint256"
					}
				],
				"name": "GradeAssigned",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "student",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "grade",
						"type": "uint256"
					}
				],
				"name": "assignGrade",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "student",
						"type": "address"
					}
				],
				"name": "getGrade",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "teacher",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		] as const;