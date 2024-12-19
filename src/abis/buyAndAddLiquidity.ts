export const buyAndAddLiquidityAbi = [{ "type": "constructor", "inputs": [{ "name": "_router", "type": "address", "internalType": "address" }, { "name": "_ijc", "type": "address", "internalType": "address" }, { "name": "_weth", "type": "address", "internalType": "address" }], "stateMutability": "nonpayable" }, { "type": "receive", "stateMutability": "payable" }, { "type": "function", "name": "factory", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract IUniswapV2Factory" }], "stateMutability": "view" }, { "type": "function", "name": "ijc", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20" }], "stateMutability": "view" }, { "type": "function", "name": "owner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "pair", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "router", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract IUniswapV2Router02" }], "stateMutability": "view" }, { "type": "function", "name": "transferOwnership", "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "weth", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20" }], "stateMutability": "view" }, { "type": "event", "name": "BonusSent", "inputs": [{ "name": "bonusAmount", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "BoughtIJC", "inputs": [{ "name": "amountSpent", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "ijcBought", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "LiquidityAdded", "inputs": [{ "name": "ijcAmount", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "ethAmount", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "liquidity", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "name": "user", "type": "address", "indexed": true, "internalType": "address" }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }] as const;