import { EndpointId } from "@layerzerolabs/lz-definitions";

import type { OAppOmniGraphHardhat, OmniPointHardhat } from "@layerzerolabs/toolbox-hardhat";

const sepoliaContract: OmniPointHardhat = {
  eid: EndpointId.SEPOLIA_V2_TESTNET,
  contractName: "PrincipalMigrationContract",
};

const arbitrumSepoliaContract: OmniPointHardhat = {
  eid: EndpointId.ARBSEP_V2_TESTNET,
  contractName: "PeripheralMigrationContract",
};

const config: OAppOmniGraphHardhat = {
  contracts: [{ contract: sepoliaContract }, { contract: arbitrumSepoliaContract }],
  connections: [
    {
      from: sepoliaContract,
      to: arbitrumSepoliaContract,
    },
    {
      from: arbitrumSepoliaContract,
      to: sepoliaContract,
    },
  ],
};

export default config;
