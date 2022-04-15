// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BasicERC20.sol";
import "./TodoCoin.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract TokenFarm {
    string public name = "TokenFarm";
    address private owner;
    uint256 reward;
    

    mapping(address => uint256) public rewards;

    uint256 private _totalSupply;
    mapping(address => uint256) private _balances;
    BasicERC20 public basicERC20;
    TodoCoin public todoCoin;

    address[] public stakers;

    mapping(address=>uint256) public stakingBalance;
    mapping(address=>bool) public hasStaked;
    mapping(address=>uint256) public rewardBalance;

    constructor(BasicERC20 _basicERC20, TodoCoin _todoCoin) {
        basicERC20 = _basicERC20;  
        todoCoin = _todoCoin;
        owner = msg.sender;  
    }

    function stakeToken(uint _amount) public {
        require(_amount > 0, "amount should be greater than 0");
        todoCoin.transferFrom(msg.sender, address(this), _amount);
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;
        hasStaked[msg.sender] = true;
        stakers.push(msg.sender);
    }

    function unstakeToken (uint _amount) public {
        uint balance = stakingBalance[msg.sender];
        require(balance >= _amount, "staking balance cannot be less than withdrawal amount");
        stakingBalance[msg.sender] = balance - _amount;

        if (stakingBalance[msg.sender] == 0) {
            hasStaked[msg.sender] = false;
            todoCoin.transfer(msg.sender, _amount);
        }
    }

    function issueToken() public {
        require(msg.sender == owner, "un authozide");

        for(uint i = 0;i < stakers.length; i++){
            address recipient = stakers[i];
            reward = stakingBalance[recipient]/100;
            //uint reward = balance.mul(1e-2);
            if (reward > 0) {
                basicERC20.transfer(recipient,reward);
                
            } 
        }
    }

}




































