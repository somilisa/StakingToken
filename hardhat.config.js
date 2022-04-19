
// const { web3 } = require("hardhat");
// const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/771e2f49bdfd48dd9a1cac51d20d2dd9",  
      accounts: ["05283f327890228c711fcfee5c7028a0fc91f381937088217469f90b897bc645"],
    },
  },
}
