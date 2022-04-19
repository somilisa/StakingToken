const { artifacts } = require("hardhat");

const Token = artifacts.require("Token");
const TaskMaster = artifacts.require("TaskMaster");
module.exports = async (deployer) => {
    await deployer.deploy(TaskMaster);
    deployer.deploy(BasicERC20, Taskmaster.address());
}