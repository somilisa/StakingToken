const { artifacts } = require("hardhat");

const Migrations = artifacts;
module.exports = function (deployer) {
    deployer.deploy(Migrations);
}