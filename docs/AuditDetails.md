# Context

This document refers the information for auditing the contracts.

## File Scope

| File                                                                                                                                                                  |     [nSLOC](# "(nSLOC, nLines, Lines)")     | Description                                                                                                                                           | Libraries                                                                                                                                                                                                                                                                                                                          |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Contracts (10)_                                                                                                                                                      |                                             |                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                    |
| [contracts/principal/PRL.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PRL.sol)                                                   |  [11](# "(nSLOC:11, nLines:18, Lines:18)")  | PRL token contract.                                                                                                                                   | [`@openzeppelin/*`](https://openzeppelin.com/contracts/)                                                                                                                                                                                                                                                                           |
| [contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)     | [99](# "(nSLOC:99, nLines:219, Lines:250)") | Main migration contract that receives LayerZero messages, handling the migration from Mimo to PRL token.                                              | [`@openzeppelin/*`](https://openzeppelin.com/contracts/) [`@layerzerolabs/lz-evm-oapp-v2/*`](https://github.com/LayerZero-Labs/LayerZero-v2/tree/417cbb9eb68a4f678490d18728973c8c99f3f017/packages/layerzero-v2/evm/oapp)                                                                                                          |
| [contracts/principal/LockBox.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/LockBox.sol)                                           | [33](# "(nSLOC:33, nLines:87, Lines:110)")  | Contract that allow PRL to be bridged from the main chain to others chain, sends and receives LayerZero messages, handling the transfer of PRL token. | [`@openzeppelin/*`](https://openzeppelin.com/contracts/) [`@layerzerolabs/lz-evm-oapp-v2/*`](https://github.com/LayerZero-Labs/LayerZero-v2/tree/417cbb9eb68a4f678490d18728973c8c99f3f017/packages/layerzero-v2/evm) [`contracts/layerZero/*`](https://github.com/parallel-protocol/prl-token/blob/main/contracts/layerZero/)      |
| [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol) | [72](# "(nSLOC:72, nLines:165, Lines:195)") | Peripheral migration contract that send LayerZero messages.                                                                                           | [`@openzeppelin/*`](https://openzeppelin.com/contracts/) [`@layerzerolabs/lz-evm-oapp-v2/*`](https://github.com/LayerZero-Labs/LayerZero-v2/tree/417cbb9eb68a4f678490d18728973c8c99f3f017/packages/layerzero-v2/evm/oapp)                                                                                                          |
| [contracts/peripheral/PeripheralPRL.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralPRL.sol)                             | [34](# "(nSLOC:34, nLines:83, Lines:106)")  | Contract that allow PRL to be bridged to others chain, sends and receives LayerZero messages, handling the minting/burning of PRL token.              | [`@openzeppelin/*`](https://openzeppelin.com/contracts/) [`@layerzerolabs/lz-evm-oapp-v2/*`](https://github.com/LayerZero-Labs/LayerZero-v2/tree/417cbb9eb68a4f678490d18728973c8c99f3f017/packages/layerzero-v2/evm/oapp) [`contracts/layerZero/*`](https://github.com/parallel-protocol/prl-token/blob/main/contracts/layerZero/) |
| [contracts/layerZero/OFTCore.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/layerZero/OFTCore.sol)                                           | [82](# "(nSLOC:82, nLines:247, Lines:324)") | Fork of LayerZero's OFTCore with all code related to sharedDecimals/decimalConversionRate removed                                                     | [`@openzeppelin/*`](https://openzeppelin.com/contracts/) [`@layerzerolabs/lz-evm-oapp-v2/*`](https://github.com/LayerZero-Labs/LayerZero-v2/tree/417cbb9eb68a4f678490d18728973c8c99f3f017/packages/layerzero-v2/evm/oapp)                                                                                                          |
| [contracts/layerZero/OFT.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/layerZero/OFT.sol)                                                   |  [31](# "(nSLOC:31, nLines:72, Lines:91)")  | Fork of LayerZero's OFT with all code related to sharedDecimals/decimalConversionRate removed                                                         | [`@openzeppelin/*`](https://openzeppelin.com/contracts/) [`@layerzerolabs/lz-evm-oapp-v2/*`](https://github.com/LayerZero-Labs/LayerZero-v2/tree/417cbb9eb68a4f678490d18728973c8c99f3f017/packages/layerzero-v2/evm/oapp)                                                                                                          |
| [contracts/layerZero/OFTAdapter.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/layerZero/OFTAdapter.sol)                                     |  [22](# "(nSLOC:22, nLines:72, Lines:91)")  | Fork of LayerZero's OFTAdapter with all code related to sharedDecimals/decimalConversionRate removed                                                  | [`@openzeppelin/*`](https://openzeppelin.com/contracts/) [`@layerzerolabs/lz-evm-oapp-v2/*`](https://github.com/LayerZero-Labs/LayerZero-v2/tree/417cbb9eb68a4f678490d18728973c8c99f3f017/packages/layerzero-v2/evm/oapp)                                                                                                          |
| [contracts/layerZero/OFTMsgCodec.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/layerZero/libs/OFTMsgCodec.sol)                              |  [29](# "(nSLOC:29, nLines:68, Lines:76)")  | Fork of LayerZero's OFTMsgCodec lib with all code related to shared decimals removed                                                                  |                                                                                                                                                                                                                                                                                                                                    |
| [contracts/layerZero/libs/OFTComposeMsgCodec.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/layerZero/libs/OFTComposeMsgCodec.sol)           |  [31](# "(nSLOC:31, nLines:73, Lines:82)")  | Fork of LayerZero's OFTComposeMsgCodec lib with all code related to local desimals removed                                                            |

## Out of scope

All other files in the repository are out of scope for this audit.

## External imports

- **@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppReceiver.sol**
  - [contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)
- **@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppSender.sol**
  - [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol)
- **@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OAppCore.sol**
  - [contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)
  - [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol)
- **@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OAppOptionsType3.sol**
  - [contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)
  - [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol)
- **@openzeppelin/contracts/access/Ownable.sol**
  - [contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)
  - [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol)
  - [contracts/principal/LockBox.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/LockBox.sol)
  - [contracts/peripheral/PeripheralPRL.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralPRL.sol)
- **@openzeppelin/contracts/token/ERC20/IERC20.sol**
  - [contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)
  - [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol)
- **@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol**
  - [contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)
  - [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol)
- **@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol**
  - [contracts/principal/LockBox.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/LockBox.sol)
- **@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol**
  - [contracts/peripheral/PeripheralPRL.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralPRL.sol)
- **@openzeppelin/contracts/utils/Pausable.sol** -[contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)
  - [contracts/peripheral/PeripheralMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralMigrationContract.sol)
  - [contracts/principal/LockBox.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/LockBox.sol)
  - [contracts/peripheral/PeripheralPRL.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/peripheral/PeripheralPRL.sol)
- **@openzeppelin/contracts/utils/ReentrancyGuard.sol** -[contracts/principal/PrincipalMigrationContract.sol](https://github.com/parallel-protocol/prl-token/blob/main/contracts/principal/PrincipalMigrationContract.sol)

## Additional context

Read the [README](../README.md) for more context.

## Scoping Details

```text
- If you have a public code repo, please share it here: n/a
- How many contracts are in scope?: 7
- Total SLoC for these contracts?:  487
- How many external imports are there?: 11
- How many separate interfaces and struct definitions are there for the contracts within scope?: 4 structs, 1 interfaces
- Does most of your code generally use composition or inheritance?: inheritance
- How many external calls?: 3 (1 lzSend on PeripheralMigrationContract, 1 lzSend on LockBox, 1 lzSend on PeripheralPRL)
- What is the overall line coverage percentage provided by your tests?: 100% of functions
- Is there a need to understand a separate part of the codebase / get context in order to audit this part of the protocol? Understand LayerZero
- Please describe required context: README under docs folder.
- Does it use an oracle?: No
- Does the token conform to the ERC20 standard?: Yes
- Are there any novel or unique curve logic or mathematical models?: No
- Does it use a timelock function?: No
- Is it an NFT?: No
- Does it have an AMM?: No
- Is it a fork of a popular project?: No
- Does it use rollups?: No
- Is it multi-chain?: Yes
- Does it use a side-chain?: No
```

## Audit Notes

### Ownable address

The owner defined on every contract using OpenZeppelin's Ownable contract is the AccessManager contract. Specific roles
will be defined to call contract functions with a delay.

## Tests

The contract is tested using the `foundry` framework. The tests are located in the `tests` folder.

Make sure to have [foundry](https://book.getfoundry.sh/getting-started/installation) install.

### Run tests

```bash
bun run test
```

### Run Coverage

```bash
bun run test:coverage:report
```
