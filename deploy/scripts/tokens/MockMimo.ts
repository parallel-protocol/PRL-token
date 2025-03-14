import assert from "assert";

import { type DeployFunction } from "hardhat-deploy/types";

import { GAS } from "../../utils";

const contractName = "Mimo";
const deploy: DeployFunction = async (hre) => {
  const { getNamedAccounts, deployments } = hre;

  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  assert(deployer, "Missing deployer account");

  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer}`);

  const contract = await deploy("ERC20Mock", {
    from: deployer,
    args: ["Mimo", "MIMO", 18],
    log: true,
    skipIfAlreadyDeployed: false,
    ...GAS,
  });

  console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${contract.address}`);
};

deploy.tags = [contractName];

export default deploy;
