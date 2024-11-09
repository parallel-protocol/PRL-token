import assert from "assert";

import { type DeployFunction } from "hardhat-deploy/types";

import { GAS } from "../../utils";
import { readFileSync } from "fs";
import { ConfigData } from "../../utils/types";

const contractName = "PeripheralPRL";

const deploy: DeployFunction = async (hre) => {
  const { getNamedAccounts, deployments } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  assert(deployer, "Missing deployer account");

  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer}`);

  const endpointV2Deployment = await hre.deployments.get("EndpointV2");

  const contract = await deploy(contractName, {
    from: deployer,
    args: [endpointV2Deployment.address, deployer],
    log: true,
    skipIfAlreadyDeployed: false,
    ...GAS,
  });

  console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${contract.address}`);
};

deploy.tags = [contractName, "PeripheralChain"];
export default deploy;
