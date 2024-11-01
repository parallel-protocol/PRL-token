// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import { Test } from "@forge-std/Test.sol";

contract User is Test {
    address payable public addr;
    uint256 public pk;

    constructor(string memory name) {
        (address _addr, uint256 _pk) = makeAddrAndKey(name);
        addr = payable(_addr);
        pk = _pk;
    }
}
