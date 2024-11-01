import { EndpointId } from "@layerzerolabs/lz-definitions";

import type { OAppOmniGraphHardhat, OmniPointHardhat } from "@layerzerolabs/toolbox-hardhat";

type ContractType = "MigrationContract" | "Bridge";

const sepoliaContract: Record<ContractType, OmniPointHardhat> = {
  Bridge: { eid: EndpointId.SEPOLIA_V2_TESTNET, contractName: "LockBox" },
  MigrationContract: { eid: EndpointId.SEPOLIA_V2_TESTNET, contractName: "PrincipalMigrationContract" },
};

const amoyContract: Record<ContractType, OmniPointHardhat> = {
  Bridge: { eid: EndpointId.AMOY_V2_TESTNET, contractName: "PeripheralPRL" },
  MigrationContract: { eid: EndpointId.AMOY_V2_TESTNET, contractName: "PeripheralMigrationContract" },
};

const arbitrumSepoliaContract: Record<ContractType, OmniPointHardhat> = {
  Bridge: { eid: EndpointId.ARBSEP_V2_TESTNET, contractName: "PeripheralPRL" },
  MigrationContract: { eid: EndpointId.ARBSEP_V2_TESTNET, contractName: "PeripheralMigrationContract" },
};

const config: OAppOmniGraphHardhat = {
  contracts: [
    {
      contract: sepoliaContract.Bridge,
    },
    {
      contract: sepoliaContract.MigrationContract,
    },
    {
      contract: amoyContract.Bridge,
    },
    {
      contract: amoyContract.MigrationContract,
    },
    {
      contract: arbitrumSepoliaContract.Bridge,
    },
    {
      contract: arbitrumSepoliaContract.MigrationContract,
    },
  ],
  connections: [
    {
      from: amoyContract.Bridge,
      to: sepoliaContract.Bridge,
    },
    {
      from: arbitrumSepoliaContract.Bridge,
      to: sepoliaContract.Bridge,
    },
    {
      from: amoyContract.MigrationContract,
      to: sepoliaContract.MigrationContract,
    },
    {
      from: arbitrumSepoliaContract.MigrationContract,
      to: sepoliaContract.MigrationContract,
    },
    {
      from: sepoliaContract.MigrationContract,
      to: amoyContract.MigrationContract,
    },
    {
      from: sepoliaContract.MigrationContract,
      to: arbitrumSepoliaContract.MigrationContract,
    },
    {
      from: arbitrumSepoliaContract.MigrationContract,
      to: amoyContract.MigrationContract,
    },
    {
      from: amoyContract.MigrationContract,
      to: arbitrumSepoliaContract.MigrationContract,
    },
  ],
};

export default config;
