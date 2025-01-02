// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "test/Integrations.t.sol";

contract PeripheralPRL_Send_Integrations_Test is Integrations_Test {
    using OptionsBuilder for bytes;

    function testFuzz_PeripheralPRL_Send_ToMainChain(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);

        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(peripheralPRLA), alice, amountToMigrate);
        deal(address(prl), address(lockBox), amountToMigrate);

        SendParam memory sendParam =
            SendParam(mainEid, addressToBytes32(users.alice.addr()), amountToMigrate, amountToMigrate, options, "", "");

        MessagingFee memory fees = peripheralPRLA.quoteSend(sendParam, false);

        vm.startPrank(alice);
        peripheralPRLA.send{ value: fees.nativeFee }(sendParam, fees, alice);

        verifyPackets(mainEid, address(lockBox));

        assertEq(peripheralPRLA.balanceOf(alice), 0);
        assertEq(prl.balanceOf(alice), amountToMigrate);
        assertEq(prl.balanceOf(address(lockBox)), 0);
    }

    function testFuzz_PeripheralPRL_Send_ToAnotherChain(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);

        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(peripheralPRLA), alice, amountToMigrate);

        SendParam memory sendParam =
            SendParam(bEid, addressToBytes32(users.alice.addr()), amountToMigrate, amountToMigrate, options, "", "");

        MessagingFee memory fees = peripheralPRLA.quoteSend(sendParam, false);

        vm.startPrank(alice);
        peripheralPRLA.approve(address(peripheralPRLA), amountToMigrate);
        peripheralPRLA.send{ value: fees.nativeFee }(sendParam, fees, alice);

        verifyPackets(bEid, address(peripheralPRLB));

        assertEq(peripheralPRLA.balanceOf(alice), 0);
        assertEq(peripheralPRLB.balanceOf(alice), amountToMigrate);
    }

    modifier PauseContract() {
        startPrank(users.owner);
        peripheralPRLA.pause();
        _;
    }

    function test_PeripheralPRL_Send_RevertWhen_Paused() external PauseContract {
        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(peripheralPRLA), alice, DEFAULT_AMOUNT_MIGRATED);

        SendParam memory sendParam = SendParam(
            mainEid,
            addressToBytes32(users.alice.addr()),
            DEFAULT_AMOUNT_MIGRATED,
            DEFAULT_AMOUNT_MIGRATED,
            options,
            "",
            ""
        );
        MessagingFee memory fees = peripheralPRLA.quoteSend(sendParam, false);

        vm.startPrank(alice);
        vm.expectRevert(abi.encodeWithSelector(Pausable.EnforcedPause.selector));
        peripheralPRLA.send{ value: fees.nativeFee }(sendParam, fees, alice);
    }
}
