const { artifacts } = require("hardhat");
const hre = require("hardhat")

 
const BasicERC20 = artifacts.require("BasicERC20");
const TodoCoin = artifacts.require("TodoCoin");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer,network,accounts){
    //Deploy BasicERC20 Token
    await deployer.deploy(BasicERC20);
    const basicERC20 = await BasicERC20.deployed();

    //Deploy mock TodoCoin Token 
    await deployer.deploy(TodoCoin);
    const todoCoin = await TodoCoin.deployed();

    //Deploy TokenFarm
    await deployer.deploy(TokenFarm, basicERC20.address, todoCoin.address);
    const tokenFarm = await TokenFarm.deployed();

    //Transfer all tokens to TokenFarm (1 million)
    await basicERC20.transfer(tokenFarm.address, "1000000000000000000000000");

    //Transfer 1000 mock TodoCoin to investor
    await todoCoin.transfer(accounts[1],"1000000000000000000000");

}