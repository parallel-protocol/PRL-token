export type Address = `0x${string}`;

export type ConfigData = {
  mimo: Address;
  owner: Address;
  mainChainEid: number;
};
