const { artifacts } = require("hardhat");
const hre = require("hardhat");
const { modules } = require("web3");

// async function main() {
//   const IERC20 = await hre.ethers.getContractFactory("IERC20");
//   const _IERC20 = await IERC20.deploy();
  
//   await _IERC20.deployed();
//   console.log("IERC20 contract address:", _IERC20.address);
// } 

async function main() {
    const StakingRewards = await hre.ethers.getContractFactory("StakingRewards");
    const stakingRewards = await StakingRewards.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3","0x5FbDB2315678afecb367f032d93F642f64180aa3");
    
    await stakingRewards.deployed();
    console.log("StakingRewards contract address:", stakingRewards.address);
} 

 main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  

