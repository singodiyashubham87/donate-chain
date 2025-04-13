// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

contract Donate {
    uint256 public totalAmount;
    address payable public donor;
    mapping(address => bool) public user;

    modifier OnlyRegisteredUser() {
        require(user[msg.sender], "Member is not registered.");
        _;
    }

    function register() public {
        user[msg.sender] = true;
    }

    function donate(uint256 _amount) public payable OnlyRegisteredUser {
        require(_amount > 0, "Amount should be greater than zero");
        // require(msg.value == _amount, "Mismatch between _amount and msg.value");
        donor = payable(msg.sender);
        totalAmount += msg.value;
    }
}
