// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "./Useofnem.sol";

contract ReverseUON {
    
    mapping(address => string) public records;
    Usofnem public uon;

    // Set the Decentralized Domain Registrar contract address
    constructor(address _uon) {
        uon = Usofnem(_uon);
    }

    // Get the address binded to the given name
    function resolve(address addr) public view returns (string memory) {
        string memory name = records[addr];
        require(StringUtils.strlen(name) != 0, "No reverse dns record found for this address");
        require(uon.getAddress(name) == addr, "User don't own this name anymore");
        return name;
    }

    // Set the reverse UON record for an address
    function setReverse(string calldata name) public {
        require(uon.getAddress(name) == msg.sender, "You don't own this name");
        records[msg.sender] = name;
    }

    function sendViaENS(string calldata ensName) public payable {
    
    // Resolve ENS name to owner address
    address payable ensOwner = payable(uon.getAddress(ensName));

    // Send ETH to the resolved address
    (bool sent, ) = ensOwner.call{value: msg.value}("");
    require(sent, "Failed to send Ether");

  }

}