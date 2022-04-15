// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TodoCoin is ERC20, Ownable {
    uint256 public unitsOneEthCanBuy = 1000;
    address public tokenOwner;            // the owner of the token
    uint public amount;
    constructor() ERC20("MyToken", "MTK") {}
    uint256 initAmount;
    function mint(address to, uint256 _amount) public onlyOwner {
        _mint(to, _amount);
        initAmount = _amount;
    }
    function modifyTokenBuyPrice(uint price) public onlyOwner{
        unitsOneEthCanBuy = price;
    }
     function buyToken(address _receiver) external payable {        
        // msg.value (in Wei) is the ether sent to the 
        // token contract
        // msg.sender is the account that sends the ether to the 
        // token contract
        // amount is the token bought by the sender
         amount = msg.value * unitsOneEthCanBuy;
        // ensure you have enough tokens to sell
        require(balanceOf(tokenOwner) >= amount, 
            "Not enough tokens");
        // transfer the token to the buyer
         _transfer(tokenOwner, msg.sender, amount);
         if (msg.sender == tokenOwner) {
            initAmount += amount; 
         } 
        
        // emit an event to inform of the transfer        
        emit Transfer(tokenOwner, _receiver , amount);
        
        // send the ether earned to the token owner
        payable(tokenOwner).transfer(msg.value);
    }
}