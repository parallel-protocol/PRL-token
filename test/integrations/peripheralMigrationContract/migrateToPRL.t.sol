// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "test/Integrations.t.sol";

contract PeripheralMigrationContract_LzReceive_Integrations_Test is Integrations_Test {
    using OptionsBuilder for bytes;
    using WadRayMath for uint256;

    function testFuzz_MigrateToPRL_ReceiveOn_PrincipalChain(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);
        uint256 expectedReceivedAmount = amountToMigrate.wadMul(principalMigrationContract.MIGRATION_RATIO());

        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(450_000, 0);
        bytes memory extraReturnOptions = OptionsBuilder.newOptions().addExecutorLzReceiveOption(210_000, 0);

        MessagingFee memory fees = peripheralMigrationContractA.quote(
            mainEid, users.alice.addr(), amountToMigrate, options, extraReturnOptions
        );

        startPrank(users.alice);
        mimo.approve(address(peripheralMigrationContractA), amountToMigrate);
        peripheralMigrationContractA.migrateToPRL{ value: fees.nativeFee }(
            users.alice.addr(), amountToMigrate, mainEid, options, extraReturnOptions
        );
        verifyPackets(mainEid, addressToBytes32(address(principalMigrationContract)));

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(prl.balanceOf(users.alice.addr()), expectedReceivedAmount);
        assertEq(prl.balanceOf(address(principalMigrationContract)), DEFAULT_PRL_SUPPLY - expectedReceivedAmount);
    }

    function testFuzz_MigrateToPRL_ReceiveOn_OriginChain(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);
        uint256 expectedReceivedAmount = amountToMigrate.wadMul(principalMigrationContract.MIGRATION_RATIO());

        bytes memory extraReturnOptions = OptionsBuilder.newOptions().addExecutorLzReceiveOption(300_000, 0);

        MessagingFee memory destChainFees = lockBox.quoteSend(
            SendParam(
                aEid,
                addressToBytes32(users.alice.addr()),
                expectedReceivedAmount,
                expectedReceivedAmount,
                extraReturnOptions,
                "",
                ""
            ),
            false
        );

        bytes memory options =
            OptionsBuilder.newOptions().addExecutorLzReceiveOption(800_000, uint128(destChainFees.nativeFee));
        MessagingFee memory fees =
            peripheralMigrationContractA.quote(aEid, users.alice.addr(), amountToMigrate, options, extraReturnOptions);

        startPrank(users.alice);
        mimo.approve(address(peripheralMigrationContractA), amountToMigrate);
        peripheralMigrationContractA.migrateToPRL{ value: fees.nativeFee + destChainFees.nativeFee }(
            users.alice.addr(), amountToMigrate, aEid, options, extraReturnOptions
        );
        verifyPackets(mainEid, address(principalMigrationContract));
        verifyPackets(aEid, address(peripheralPRLA));

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(peripheralPRLA.balanceOf(users.alice.addr()), expectedReceivedAmount);
        assertEq(prl.balanceOf(address(principalMigrationContract)), DEFAULT_PRL_SUPPLY - expectedReceivedAmount);
    }

    function testFuzz_MigrateToPRL_ReceiveOn_AnotherChain(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);
        uint256 expectedReceivedAmount = amountToMigrate.wadMul(principalMigrationContract.MIGRATION_RATIO());

        bytes memory extraReturnOptions = OptionsBuilder.newOptions().addExecutorLzReceiveOption(300_000, 0);

        MessagingFee memory destChainFees = lockBox.quoteSend(
            SendParam(
                bEid,
                addressToBytes32(users.alice.addr()),
                expectedReceivedAmount,
                expectedReceivedAmount,
                extraReturnOptions,
                "",
                ""
            ),
            false
        );

        bytes memory options =
            OptionsBuilder.newOptions().addExecutorLzReceiveOption(800_000, uint128(destChainFees.nativeFee));

        MessagingFee memory fees =
            peripheralMigrationContractA.quote(bEid, users.alice.addr(), amountToMigrate, options, extraReturnOptions);
        startPrank(users.alice);

        mimo.approve(address(peripheralMigrationContractA), amountToMigrate);
        peripheralMigrationContractA.migrateToPRL{ value: fees.nativeFee + destChainFees.nativeFee }(
            users.alice.addr(), amountToMigrate, bEid, options, extraReturnOptions
        );

        verifyPackets(mainEid, address(principalMigrationContract));
        verifyPackets(bEid, address(peripheralPRLB));

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(peripheralPRLB.balanceOf(users.alice.addr()), expectedReceivedAmount);
        assertEq(prl.balanceOf(address(principalMigrationContract)), DEFAULT_PRL_SUPPLY - expectedReceivedAmount);
    }

    modifier PauseContract() {
        startPrank(users.owner);
        peripheralMigrationContractA.pause();
        _;
    }

    function test_MigrateToPRL_RevertWhen_Paused() external PauseContract {
        address alice = users.alice.addr();

        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(450_000, 0);
        bytes memory extraReturnOptions = OptionsBuilder.newOptions().addExecutorLzReceiveOption(210_000, 0);

        MessagingFee memory fees =
            peripheralMigrationContractA.quote(mainEid, alice, DEFAULT_AMOUNT_MIGRATED, options, extraReturnOptions);

        vm.startPrank(alice);
        vm.expectRevert(abi.encodeWithSelector(Pausable.EnforcedPause.selector));
        peripheralMigrationContractA.migrateToPRL{ value: fees.nativeFee }(
            alice, DEFAULT_AMOUNT_MIGRATED, mainEid, options, extraReturnOptions
        );
    }
}
