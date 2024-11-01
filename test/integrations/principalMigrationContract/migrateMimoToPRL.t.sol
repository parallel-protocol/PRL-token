// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "test/Integrations.t.sol";

contract PrincipalMigrationContract_MigrateMimoToPRL_Integrations_Test is Integrations_Test {
    using WadRayMath for uint256;

    function test_MigrateMimoToPRL() external {
        uint256 amountToMigrate = DEFAULT_AMOUNT_MIGRATED;
        uint256 expectedReceivedAmount = DEFAULT_EXPECTED_AMOUNT_RECEIVED;

        uint256 alicePrlBalanceBefore = prl.balanceOf(users.alice.addr());
        uint256 migrationContractBalanceBefore = prl.balanceOf(address(principalMigrationContract));

        startPrank(users.alice);

        mimo.approve(address(principalMigrationContract), amountToMigrate);

        vm.expectEmit(true, true, false, true);
        emit PrincipalMigrationContract.MIMOToPRLMigrated(users.alice.addr(), amountToMigrate, expectedReceivedAmount);
        principalMigrationContract.migrateMimoToPRL(amountToMigrate);

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(prl.balanceOf(users.alice.addr()), alicePrlBalanceBefore + expectedReceivedAmount);
        assertEq(
            prl.balanceOf(address(principalMigrationContract)), migrationContractBalanceBefore - expectedReceivedAmount
        );
    }

    function test_MigrateMimoToPRL_RoundDown() external {
        uint256 amountToMigrate = 1234;
        uint256 expectedReceivedAmount = 123;

        uint256 alicePrlBalanceBefore = prl.balanceOf(users.alice.addr());
        uint256 migrationContractBalanceBefore = prl.balanceOf(address(principalMigrationContract));

        startPrank(users.alice);

        mimo.approve(address(principalMigrationContract), amountToMigrate);

        vm.expectEmit(true, true, false, true);
        emit PrincipalMigrationContract.MIMOToPRLMigrated(users.alice.addr(), amountToMigrate, expectedReceivedAmount);
        principalMigrationContract.migrateMimoToPRL(amountToMigrate);

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(prl.balanceOf(users.alice.addr()), alicePrlBalanceBefore + expectedReceivedAmount);
        assertEq(
            prl.balanceOf(address(principalMigrationContract)), migrationContractBalanceBefore - expectedReceivedAmount
        );
    }

    function test_MigrateMimoToPRL_RoundUp() external {
        uint256 amountToMigrate = 1235;
        uint256 expectedReceivedAmount = 124;

        uint256 alicePrlBalanceBefore = prl.balanceOf(users.alice.addr());
        uint256 migrationContractBalanceBefore = prl.balanceOf(address(principalMigrationContract));

        startPrank(users.alice);

        mimo.approve(address(principalMigrationContract), amountToMigrate);

        vm.expectEmit(true, true, false, true);
        emit PrincipalMigrationContract.MIMOToPRLMigrated(users.alice.addr(), amountToMigrate, expectedReceivedAmount);
        principalMigrationContract.migrateMimoToPRL(amountToMigrate);

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(prl.balanceOf(users.alice.addr()), alicePrlBalanceBefore + expectedReceivedAmount);
        assertEq(
            prl.balanceOf(address(principalMigrationContract)), migrationContractBalanceBefore - expectedReceivedAmount
        );
    }

    function test_MigrateMimoToPRL_WithDust() external {
        uint256 amountToMigrate = 1;
        uint256 expectedReceivedAmount = 0;

        uint256 alicePrlBalanceBefore = prl.balanceOf(users.alice.addr());
        uint256 migrationContractBalanceBefore = prl.balanceOf(address(principalMigrationContract));

        startPrank(users.alice);

        mimo.approve(address(principalMigrationContract), amountToMigrate);

        vm.expectEmit(true, true, false, true);
        emit PrincipalMigrationContract.MIMOToPRLMigrated(users.alice.addr(), amountToMigrate, expectedReceivedAmount);
        principalMigrationContract.migrateMimoToPRL(amountToMigrate);

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(prl.balanceOf(users.alice.addr()), alicePrlBalanceBefore + expectedReceivedAmount);
        assertEq(
            prl.balanceOf(address(principalMigrationContract)), migrationContractBalanceBefore - expectedReceivedAmount
        );
    }

    function testFuzz_MigrateMimoToPRL(uint256 amountToMigrate) external {
        amountToMigrate = _bound(amountToMigrate, 10, INITIAL_BALANCE);
        uint256 expectedReceivedAmount = amountToMigrate.wadMul(principalMigrationContract.MIGRATION_RATIO());

        uint256 alicePrlBalanceBefore = prl.balanceOf(users.alice.addr());
        uint256 migrationContractBalanceBefore = prl.balanceOf(address(principalMigrationContract));

        startPrank(users.alice);

        mimo.approve(address(principalMigrationContract), amountToMigrate);

        vm.expectEmit(true, true, false, true);
        emit PrincipalMigrationContract.MIMOToPRLMigrated(users.alice.addr(), amountToMigrate, expectedReceivedAmount);
        principalMigrationContract.migrateMimoToPRL(amountToMigrate);

        assertEq(mimo.balanceOf(users.alice.addr()), INITIAL_BALANCE - amountToMigrate);
        assertEq(prl.balanceOf(users.alice.addr()), alicePrlBalanceBefore + expectedReceivedAmount);
        assertEq(
            prl.balanceOf(address(principalMigrationContract)), migrationContractBalanceBefore - expectedReceivedAmount
        );
    }

    modifier PauseContract() {
        startPrank(users.owner);
        principalMigrationContract.pause();
        _;
    }

    function test_MigrateMimoToPRL_RevertWhen_Paused() external PauseContract {
        startPrank(users.alice);
        vm.expectRevert(abi.encodeWithSelector(Pausable.EnforcedPause.selector));
        principalMigrationContract.migrateMimoToPRL(DEFAULT_AMOUNT_MIGRATED);
    }
}
