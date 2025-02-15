/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMessageLib,
  IMessageLibInterface,
} from "../../../../../@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessageLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_oapp",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_configType",
        type: "uint32",
      },
    ],
    name: "getConfig",
    outputs: [
      {
        internalType: "bytes",
        name: "config",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
    ],
    name: "isSupportedEid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messageLibType",
    outputs: [
      {
        internalType: "enum MessageLibType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oapp",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "configType",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "config",
            type: "bytes",
          },
        ],
        internalType: "struct SetConfigParam[]",
        name: "_config",
        type: "tuple[]",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint64",
        name: "major",
        type: "uint64",
      },
      {
        internalType: "uint8",
        name: "minor",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "endpointVersion",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMessageLib__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageLibInterface {
    return new Interface(_abi) as IMessageLibInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IMessageLib {
    return new Contract(address, _abi, runner) as unknown as IMessageLib;
  }
}
