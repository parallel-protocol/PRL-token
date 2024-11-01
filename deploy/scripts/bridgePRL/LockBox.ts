import assert from "assert";

import { type DeployFunction } from "hardhat-deploy/types";

import { GAS } from "../../utils";
import { readFileSync } from "fs";
import { ConfigData } from "../../utils/types";

const contractName = "LockBox";

const deploy: DeployFunction = async (hre) => {
  const { getNamedAccounts, deployments } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  assert(deployer, "Missing deployer account");

  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer}`);
  const config: ConfigData = JSON.parse(readFileSync(`./deploy/config/${hre.network.name}/config.json`).toString());

  const endpointV2Deployment = await hre.deployments.get("EndpointV2");
  const prl = await hre.deployments.get("PRL");

  const contract = await deploy(contractName, {
    from: deployer,
    args: [prl.address, endpointV2Deployment.address, config.owner],
    log: true,
    skipIfAlreadyDeployed: false,
    ...GAS,
  });

  console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${contract.address}`);
};

deploy.tags = [contractName, "MainChain"];
deploy.dependencies = ["PRL"];
export default deploy;
