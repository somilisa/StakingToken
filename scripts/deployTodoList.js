const { artifacts } = require("hardhat");
const hre = require("hardhat")

async function main() {
    const TodoList = await hre.ethers.getContractAt("TodoList")
    const todoList = await TodoList.deploy()
    
    await todoList.deployed()
    console.log(`TodoList contract address: ${todoList.address}`)
} 


async function main() {
    const BasicERC20 = await hre.ethers.getContractAt("BasicERC20")
    const basicERC20 = await BasicERC20.deploy()
    
    await basicERC20.deployed()
    console.log(`BasicERC20 contract address: ${basicERC20.address}`)
} 