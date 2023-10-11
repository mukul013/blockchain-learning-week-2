// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SimpleStorage {
    int public storedData;

    function set(int x) public {
        storedData = x;
    }

    function get() public view returns (int) {
        return storedData;
    }
}