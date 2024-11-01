import assert from "assert";
import { parseEther } from "ethers/lib/utils";
import { type DeployFunction } from "hardhat-deploy/types";

import { GAS } from "../../utils";

const contractName = "PRL";
const supplyToMint = parseEther("100000000");
const deploy: DeployFunction = async (hre) => {
  const { getNamedAccounts, deployments } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  assert(deployer, "Missing deployer account");

  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer}`);

  const contract = await deploy(contractName, {
    from: deployer,
    args: [supplyToMint],
    log: true,
    skipIfAlreadyDeployed: false,
    ...GAS,
  });

  console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${contract.address}`);
};

deploy.tags = [contractName, "Main"];

export default deploy;
