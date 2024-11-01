// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import { User } from "./User.sol";

struct Users {
    // Default owner for all contracts.
    User owner;
    // Impartial user.
    User alice;
    // Impartial user.
    User bob;
    // Malicious user.
    User hacker;
}
