// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "test/Integrations.t.sol";

contract LockBox_SendWithPermit_Integrations_Test is Integrations_Test {
    using OptionsBuilder for bytes;
    using OFTMsgCodec for bytes;

    function setUp() public virtual override {
        super.setUp();
        sigUtils = new SigUtils(prl.DOMAIN_SEPARATOR());
    }

    function testFuzz_LockBox_SendWithPermit(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);

        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(prl), alice, amountToMigrate);

        SendParam memory sendParam =
            SendParam(aEid, addressToBytes32(users.alice.addr()), amountToMigrate, amountToMigrate, options, "", "");
        (uint256 deadline, uint8 v, bytes32 r, bytes32 s) =
            _signPermitData(users.alice.pk(), address(lockBox), amountToMigrate, address(prl));

        MessagingFee memory fees = lockBox.quoteSend(sendParam, false);
        vm.startPrank(alice);
        lockBox.sendWithPermit{ value: fees.nativeFee }(sendParam, fees, alice, deadline, v, r, s);

        verifyPackets(aEid, address(peripheralPRLA));

        assertEq(prl.balanceOf(alice), 0);
        assertEq(peripheralPRLA.balanceOf(alice), amountToMigrate);
    }

    modifier PauseContract() {
        startPrank(users.owner);
        lockBox.pause();
        _;
    }

    function test_LockBox_SendWithPermit_RevertWhen_Paused() external PauseContract {
        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(prl), alice, DEFAULT_AMOUNT_MIGRATED);

        SendParam memory sendParam = SendParam(
            aEid,
            addressToBytes32(users.alice.addr()),
            DEFAULT_AMOUNT_MIGRATED,
            DEFAULT_AMOUNT_MIGRATED,
            options,
            "",
            ""
        );
        (uint256 deadline, uint8 v, bytes32 r, bytes32 s) =
            _signPermitData(users.alice.pk(), address(lockBox), DEFAULT_AMOUNT_MIGRATED, address(prl));

        MessagingFee memory fees = lockBox.quoteSend(sendParam, false);

        vm.startPrank(alice);
        vm.expectRevert(abi.encodeWithSelector(Pausable.EnforcedPause.selector));
        lockBox.sendWithPermit{ value: fees.nativeFee }(sendParam, fees, alice, deadline, v, r, s);
    }
}
