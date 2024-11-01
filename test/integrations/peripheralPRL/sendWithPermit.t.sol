// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "test/Integrations.t.sol";

contract PeripheralPRL_SendWithPermit_Integrations_Test is Integrations_Test {
    using OptionsBuilder for bytes;
    using OFTMsgCodec for bytes;
    using WadRayMath for uint256;

    function setUp() public virtual override {
        super.setUp();
        sigUtils = new SigUtils(peripheralPRLA.DOMAIN_SEPARATOR());
    }

    function testFuzz_PeripheralPRL_SendWithPermit_ToMainChain(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);

        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(peripheralPRLA), alice, amountToMigrate);
        deal(address(prl), address(lockBox), amountToMigrate);

        SendParam memory sendParam =
            SendParam(mainEid, addressToBytes32(users.alice.addr()), amountToMigrate, amountToMigrate, options, "", "");
        MessagingFee memory fees = peripheralPRLA.quoteSend(sendParam, false);
        (uint256 deadline, uint8 v, bytes32 r, bytes32 s) =
            _signPermitData(users.alice.pk(), address(peripheralPRLA), amountToMigrate, address(peripheralPRLA));

        vm.startPrank(alice);
        peripheralPRLA.sendWithPermit{ value: fees.nativeFee }(sendParam, fees, alice, deadline, v, r, s);

        verifyPackets(mainEid, address(lockBox));
        assertEq(peripheralPRLA.balanceOf(alice), 0);
        assertEq(prl.balanceOf(alice), amountToMigrate);
        assertEq(prl.balanceOf(address(lockBox)), 0);
    }

    function testFuzz_PeripheralPRL_SendWithPermit_ToAnotherChain(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);

        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(peripheralPRLA), alice, amountToMigrate);

        SendParam memory sendParam =
            SendParam(bEid, addressToBytes32(users.alice.addr()), amountToMigrate, amountToMigrate, options, "", "");
        (uint256 deadline, uint8 v, bytes32 r, bytes32 s) =
            _signPermitData(users.alice.pk(), address(peripheralPRLA), amountToMigrate, address(peripheralPRLA));

        MessagingFee memory fees = peripheralPRLA.quoteSend(sendParam, false);

        vm.startPrank(alice);
        peripheralPRLA.sendWithPermit{ value: fees.nativeFee }(sendParam, fees, alice, deadline, v, r, s);

        verifyPackets(bEid, address(peripheralPRLB));

        assertEq(peripheralPRLA.balanceOf(alice), 0);
        assertEq(peripheralPRLB.balanceOf(alice), amountToMigrate);
    }

    modifier PauseContract() {
        startPrank(users.owner);
        peripheralPRLA.pause();
        _;
    }

    function test_PeripheralPRL_SendWithPermit_RevertWhen_Paused() external PauseContract {
        bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(200_000, 0);

        address alice = users.alice.addr();
        deal(address(peripheralPRLA), alice, DEFAULT_AMOUNT_MIGRATED);

        SendParam memory sendParam = SendParam(
            bEid,
            addressToBytes32(users.alice.addr()),
            DEFAULT_AMOUNT_MIGRATED,
            DEFAULT_AMOUNT_MIGRATED,
            options,
            "",
            ""
        );
        (uint256 deadline, uint8 v, bytes32 r, bytes32 s) =
            _signPermitData(users.alice.pk(), address(peripheralPRLA), DEFAULT_AMOUNT_MIGRATED, address(peripheralPRLA));

        MessagingFee memory fees = peripheralPRLA.quoteSend(sendParam, false);

        vm.startPrank(alice);
        vm.expectRevert(abi.encodeWithSelector(Pausable.EnforcedPause.selector));
        peripheralPRLA.sendWithPermit{ value: fees.nativeFee }(sendParam, fees, alice, deadline, v, r, s);
    }
}
