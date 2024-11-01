// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

/**
 * @title WadRayMath library
 * @author Aave https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/libraries/math/WadRayMath.sol
 * @notice Provides functions to perform calculations with Wad and Ray units
 * @dev Provides mul and div function for wads (decimal numbers with 18 digits of precision) and rays (decimal numbers
 * with 27 digits of precision)
 * @dev Operations are rounded. If a value is >=.5, will be rounded up, otherwise rounded down.
 */
library WadRayMath {
    // HALF_WAD and HALF_RAY expressed with extended notation as constant with operations are not supported in Yul
    // assembly
    uint256 internal constant WAD = 1e18;
    uint256 internal constant HALF_WAD = 0.5e18;

    uint256 internal constant RAY = 1e27;
    uint256 internal constant HALF_RAY = 0.5e27;

    uint256 internal constant WAD_RAY_RATIO = 1e9;

    /**
     * @dev Multiplies two wad, rounding half up to the nearest wad
     * @dev assembly optimized for improved gas savings, see
     * https://twitter.com/transmissions11/status/1451131036377571328
     * @param _a Wad
     * @param _b Wad
     * @return c = a*b, in wad
     */
    function wadMul(uint256 _a, uint256 _b) internal pure returns (uint256 c) {
        // to avoid overflow, a <= (type(uint256).max - HALF_WAD) / b
        assembly {
            if iszero(or(iszero(_b), iszero(gt(_a, div(sub(not(0), HALF_WAD), _b))))) { revert(0, 0) }

            c := div(add(mul(_a, _b), HALF_WAD), WAD)
        }
    }

    /**
     * @dev Divides two wad, rounding half up to the nearest wad
     * @dev assembly optimized for improved gas savings, see
     * https://twitter.com/transmissions11/status/1451131036377571328
     * @param _a Wad
     * @param _b Wad
     * @return c = _a/_b, in wad
     */
    function wadDiv(uint256 _a, uint256 _b) internal pure returns (uint256 c) {
        // to avoid overflow, _a <= (type(uint256).max - halfB) / WAD
        assembly {
            if or(iszero(_b), iszero(iszero(gt(_a, div(sub(not(0), div(_b, 2)), WAD))))) { revert(0, 0) }

            c := div(add(mul(_a, WAD), div(_b, 2)), _b)
        }
    }

    /**
     * @notice Multiplies two ray, rounding half up to the nearest ray
     * @dev assembly optimized for improved gas savings, see
     * https://twitter.com/transmissions11/status/1451131036377571328
     * @param _a Ray
     * @param _b Ray
     * @return c = a raymul _b
     */
    function rayMul(uint256 _a, uint256 _b) internal pure returns (uint256 c) {
        // to avoid overflow, a <= (type(uint256).max - HALF_RAY) / _b
        assembly {
            if iszero(or(iszero(_b), iszero(gt(_a, div(sub(not(0), HALF_RAY), _b))))) { revert(0, 0) }

            c := div(add(mul(_a, _b), HALF_RAY), RAY)
        }
    }

    /**
     * @notice Divides two ray, rounding half up to the nearest ray
     * @dev assembly optimized for improved gas savings, see
     * https://twitter.com/transmissions11/status/1451131036377571328
     * @param _a Ray
     * @param _b Ray
     * @return c = a raydiv _b
     */
    function rayDiv(uint256 _a, uint256 _b) internal pure returns (uint256 c) {
        // to avoid overflow, a <= (type(uint256).max - halfB) / RAY
        assembly {
            if or(iszero(_b), iszero(iszero(gt(_a, div(sub(not(0), div(_b, 2)), RAY))))) { revert(0, 0) }

            c := div(add(mul(_a, RAY), div(_b, 2)), _b)
        }
    }

    /**
     * @dev Casts ray down to wad
     * @dev assembly optimized for improved gas savings, see
     * https://twitter.com/transmissions11/status/1451131036377571328
     * @param _a Ray
     * @return b = _a converted to wad, rounded half up to the nearest wad
     */
    function rayToWad(uint256 _a) internal pure returns (uint256 b) {
        assembly {
            b := div(_a, WAD_RAY_RATIO)
            let remainder := mod(_a, WAD_RAY_RATIO)
            if iszero(lt(remainder, div(WAD_RAY_RATIO, 2))) { b := add(b, 1) }
        }
    }

    /**
     * @dev Converts wad up to ray
     * @dev assembly optimized for improved gas savings, see
     * https://twitter.com/transmissions11/status/1451131036377571328
     * @param _a Wad
     * @return b = a converted in ray
     */
    function wadToRay(uint256 _a) internal pure returns (uint256 b) {
        // to avoid overflow, b/WAD_RAY_RATIO == a
        assembly {
            b := mul(_a, WAD_RAY_RATIO)

            if iszero(eq(div(b, WAD_RAY_RATIO), _a)) { revert(0, 0) }
        }
    }
}
