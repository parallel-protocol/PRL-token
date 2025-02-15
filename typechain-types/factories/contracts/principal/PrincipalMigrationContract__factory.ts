/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PrincipalMigrationContract,
  PrincipalMigrationContractInterface,
} from "../../../contracts/principal/PrincipalMigrationContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_mimo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_prl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lockBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_endpoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressZero",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDelegate",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEndpointCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "options",
        type: "bytes",
      },
    ],
    name: "InvalidOptions",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
    ],
    name: "NoPeer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "OnlyEndpoint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "sender",
        type: "bytes32",
      },
    ],
    name: "OnlyPeer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "EmergencyRescued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16",
          },
          {
            internalType: "bytes",
            name: "options",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct EnforcedOptionParam[]",
        name: "_enforcedOptions",
        type: "tuple[]",
      },
    ],
    name: "EnforcedOptionSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mimoAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prlAmount",
        type: "uint256",
      },
    ],
    name: "MIMOToPRLMigrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "destEid",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mimoAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prlAmount",
        type: "uint256",
      },
    ],
    name: "MigrationMessageReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "peer",
        type: "bytes32",
      },
    ],
    name: "PeerSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "MIGRATION_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIMO",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRL",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_encodedMessage",
        type: "bytes",
      },
    ],
    name: "_decodeMessage",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "destEid",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "extraOptionsLength",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "origin",
        type: "tuple",
      },
    ],
    name: "allowInitializePath",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "_msgType",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes",
      },
    ],
    name: "combineOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "emergencyRescue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpointV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "msgType",
        type: "uint16",
      },
    ],
    name: "enforcedOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "enforcedOption",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "isComposeMsgSender",
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
    name: "lockBox",
    outputs: [
      {
        internalType: "contract IOFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "migrateMimoToPRL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nextNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oAppVersion",
    outputs: [
      {
        internalType: "uint64",
        name: "senderVersion",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "receiverVersion",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
    ],
    name: "peers",
    outputs: [
      {
        internalType: "bytes32",
        name: "peer",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
    ],
    name: "setDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16",
          },
          {
            internalType: "bytes",
            name: "options",
            type: "bytes",
          },
        ],
        internalType: "struct EnforcedOptionParam[]",
        name: "_enforcedOptions",
        type: "tuple[]",
      },
    ],
    name: "setEnforcedOptions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_peer",
        type: "bytes32",
      },
    ],
    name: "setPeer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x61010060405234801561001157600080fd5b5060405161230138038061230183398101604081905261003091610208565b8181806001600160a01b03811661006157604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61006a8161019c565b506001600160a01b03808316608052811661009857604051632d618d8160e21b815260040160405180910390fd5b60805160405163ca5eb5e160e01b81526001600160a01b0383811660048301529091169063ca5eb5e190602401600060405180830381600087803b1580156100df57600080fd5b505af11580156100f3573d6000803e3d6000fd5b50506003805460ff191690555050600160045550506001600160a01b03851661012f57604051639fabe1c160e01b815260040160405180910390fd5b6001600160a01b03841661015657604051639fabe1c160e01b815260040160405180910390fd5b6001600160a01b03831661017d57604051639fabe1c160e01b815260040160405180910390fd5b50506001600160a01b0392831660a05290821660c0521660e05261026d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b038116811461020357600080fd5b919050565b600080600080600060a0868803121561022057600080fd5b610229866101ec565b9450610237602087016101ec565b9350610245604087016101ec565b9250610253606087016101ec565b9150610261608087016101ec565b90509295509295909350565b60805160a05160c05160e05161201c6102e56000396000818161031b01528181610e2f0152610f1401526000818161027e0152818161085101528181610dc30152610e61015260008181610444015261081c01526000818161034f0152818161057f01528181610aec0152610cd8015261201c6000f3fe60806040526004361061019a5760003560e01c806382413eac116100e1578063b72952ee1161008a578063bc70b35411610064578063bc70b354146104fd578063ca5eb5e11461051d578063f2fde38b1461053d578063ff7bd03d1461055d57600080fd5b8063b72952ee14610490578063b98bd070146104b0578063bb0b6a53146104d057600080fd5b806395916bdb116100bb57806395916bdb14610412578063a00e07c414610432578063a1a932861461046657600080fd5b806382413eac146103bf5780638456cb59146103df5780638da5cb5b146103f457600080fd5b80635535d461116101435780635e280f111161011d5780635e280f111461033d578063715018a6146103715780637d25a05e1461038657600080fd5b80635535d461146102b85780635c975abb146102e55780635d19b0d11461030957600080fd5b80633400288b116101745780633400288b146102375780633f4ba83a146102575780635502c73b1461026c57600080fd5b806313137d65146101a657806317442b70146101bb57806324fd4c05146101e257600080fd5b366101a157005b600080fd5b6101b96101b436600461163a565b61057d565b005b3480156101c757600080fd5b50604080516000815260026020820152015b60405180910390f35b3480156101ee57600080fd5b506102026101fd3660046116d9565b61066f565b604080516001600160a01b039095168552602085019390935263ffffffff9091169183019190915260608201526080016101d9565b34801561024357600080fd5b506101b961025236600461172d565b6106a3565b34801561026357600080fd5b506101b96106b9565b34801561027857600080fd5b506102a07f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101d9565b3480156102c457600080fd5b506102d86102d336600461176b565b6106cb565b6040516101d991906117f0565b3480156102f157600080fd5b5060035460ff165b60405190151581526020016101d9565b34801561031557600080fd5b506102a07f000000000000000000000000000000000000000000000000000000000000000081565b34801561034957600080fd5b506102a07f000000000000000000000000000000000000000000000000000000000000000081565b34801561037d57600080fd5b506101b9610770565b34801561039257600080fd5b506103a66103a136600461172d565b610782565b60405167ffffffffffffffff90911681526020016101d9565b3480156103cb57600080fd5b506102f96103da36600461180a565b61078b565b3480156103eb57600080fd5b506101b96107a0565b34801561040057600080fd5b506000546001600160a01b03166102a0565b34801561041e57600080fd5b506101b961042d366004611870565b6107b0565b34801561043e57600080fd5b506102a07f000000000000000000000000000000000000000000000000000000000000000081565b34801561047257600080fd5b5061048267016345785d8a000081565b6040519081526020016101d9565b34801561049c57600080fd5b506101b96104ab366004611889565b610886565b3480156104bc57600080fd5b506101b96104cb3660046118a5565b6108ea565b3480156104dc57600080fd5b506104826104eb36600461191a565b60016020526000908152604090205481565b34801561050957600080fd5b506102d8610518366004611937565b610904565b34801561052957600080fd5b506101b961053836600461199a565b610aac565b34801561054957600080fd5b506101b961055836600461199a565b610b4b565b34801561056957600080fd5b506102f96105783660046119b5565b610b9f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633146105e6576040517f91ac5e4f0000000000000000000000000000000000000000000000000000000081523360048201526024015b60405180910390fd5b60208701803590610600906105fb908a61191a565b610bd5565b1461065757610612602088018861191a565b6040517fc26bebcc00000000000000000000000000000000000000000000000000000000815263ffffffff9091166004820152602088013560248201526044016105dd565b61066687878787878787610c2a565b50505050505050565b600080808080808080610684898b018b6119d1565b93509350935093506106938490565b9a92995090975095509350505050565b6106ab610fa2565b6106b58282610fe8565b5050565b6106c1610fa2565b6106c961103d565b565b6002602090815260009283526040808420909152908252902080546106ef90611a10565b80601f016020809104026020016040519081016040528092919081815260200182805461071b90611a10565b80156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b505050505081565b610778610fa2565b6106c9600061108f565b60005b92915050565b6001600160a01b03811630145b949350505050565b6107a8610fa2565b6106c96110f7565b6107b8611134565b6107c0611171565b60006107cb826111b4565b60408051338152602081018590529081018290529091507f7b5239339237622fcb52f2b47f2ade1685511917b893fd8fb500a6a8eb74de499060600160405180910390a16108446001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856111c8565b6108786001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016338361124a565b506108836001600455565b50565b61088e610fa2565b610896611280565b60405181815233906001600160a01b038416907f050bfcf56def683ba46089b74b240740900eb3e22309f1a9a50cdad12e7a43b29060200160405180910390a36106b56001600160a01b038316338361124a565b6108f2610fa2565b6106b56108ff8284611ab4565b6112bc565b63ffffffff8416600090815260026020908152604080832061ffff8716845290915281208054606092919061093890611a10565b80601f016020809104026020016040519081016040528092919081815260200182805461096490611a10565b80156109b15780601f10610986576101008083540402835291602001916109b1565b820191906000526020600020905b81548152906001019060200180831161099457829003601f168201915b505050505090508051600003610a015783838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294506107989350505050565b6000839003610a11579050610798565b60028310610a8f57610a5884848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113ce92505050565b80610a668460028188611bdc565b604051602001610a7893929190611c06565b604051602081830303815290604052915050610798565b8383604051639a6d49cd60e01b81526004016105dd929190611c2e565b610ab4610fa2565b6040517fca5eb5e10000000000000000000000000000000000000000000000000000000081526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063ca5eb5e190602401600060405180830381600087803b158015610b3057600080fd5b505af1158015610b44573d6000803e3d6000fd5b5050505050565b610b53610fa2565b6001600160a01b038116610b96576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024016105dd565b6108838161108f565b6000602082018035906001908390610bb7908661191a565b63ffffffff1681526020810191909152604001600020541492915050565b63ffffffff811660009081526001602052604081205480610785576040517ff6ff4fb700000000000000000000000000000000000000000000000000000000815263ffffffff841660048201526024016105dd565b600080600080610c3a898961066f565b93509350935093506000610c4d846111b4565b90507f1f1b0dd6b79d5ded2d2940f8d747107122f25860b53f46cf78dca361897f76268b610c7e60208f018f61191a565b60208f01356040805193845263ffffffff92831660208501526001600160a01b039182169084015290861660608301528716608082015260a0810186905260c0810183905260e00160405180910390a1811580610d6757507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663416ecebf6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d589190611c5d565b63ffffffff168363ffffffff16145b15610def57604080516001600160a01b0387168152602081018690529081018290527f7b5239339237622fcb52f2b47f2ade1685511917b893fd8fb500a6a8eb74de499060600160405180910390a1610dea6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868361124a565b610f94565b6000610dff8b8b888588886113fa565b6040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018590529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015610eac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed09190611c7a565b50604080518082018252348082526000602083015291517fc7c7f5b30000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263c7c7f5b3929091610f4d9186913090600401611c9c565b60c06040518083038185885af1158015610f6b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f909190611da4565b5050505b505050505050505050505050565b6000546001600160a01b031633146106c9576040517f118cdaa70000000000000000000000000000000000000000000000000000000081523360048201526024016105dd565b63ffffffff8216600081815260016020908152604091829020849055815192835282018390527f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b910160405180910390a15050565b611045611280565b6003805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6110ff611134565b6003805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110723390565b60035460ff16156106c9576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600454036111ad576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600455565b60006107858267016345785d8a00006114fb565b6040516001600160a01b0384811660248301528381166044830152606482018390526112449186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611533565b50505050565b6040516001600160a01b0383811660248301526044820183905261127b91859182169063a9059cbb906064016111fd565b505050565b60035460ff166106c9576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8151811015611393576112ee8282815181106112dd576112dd611e14565b6020026020010151604001516113ce565b81818151811061130057611300611e14565b6020026020010151604001516002600084848151811061132257611322611e14565b60200260200101516000015163ffffffff1663ffffffff168152602001908152602001600020600084848151811061135c5761135c611e14565b60200260200101516020015161ffff1661ffff168152602001908152602001600020908161138a9190611e7a565b506001016112bf565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b674816040516113c39190611f3a565b60405180910390a150565b600281015161ffff81166003146106b55781604051639a6d49cd60e01b81526004016105dd91906117f0565b6114436040518060e00160405280600063ffffffff1681526020016000801916815260200160008152602001600081526020016060815260200160608152602001606081525090565b60008760c0886114538683611fc5565b9261146093929190611bdc565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052506040805160e08101825263ffffffff9a909a168a526001600160a01b039b909b166020808b0191909152898c018b905260608a019a909a52608089019490945250508751808801895282815260a087015250865195860190965250505091815260c082015292915050565b600081156706f05b59d3b20000198390048411151761151957600080fd5b50670de0b6b3a764000091026706f05b59d3b20000010490565b600080602060008451602086016000885af180611556576040513d6000823e3d81fd5b50506000513d9150811561156e57806001141561157b565b6001600160a01b0384163b155b15611244576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024016105dd565b6000606082840312156115cf57600080fd5b50919050565b60008083601f8401126115e757600080fd5b50813567ffffffffffffffff8111156115ff57600080fd5b60208301915083602082850101111561161757600080fd5b9250929050565b80356001600160a01b038116811461163557600080fd5b919050565b600080600080600080600060e0888a03121561165557600080fd5b61165f89896115bd565b965060608801359550608088013567ffffffffffffffff8082111561168357600080fd5b61168f8b838c016115d5565b90975095508591506116a360a08b0161161e565b945060c08a01359150808211156116b957600080fd5b506116c68a828b016115d5565b989b979a50959850939692959293505050565b600080602083850312156116ec57600080fd5b823567ffffffffffffffff81111561170357600080fd5b61170f858286016115d5565b90969095509350505050565b63ffffffff8116811461088357600080fd5b6000806040838503121561174057600080fd5b823561174b8161171b565b946020939093013593505050565b803561ffff8116811461163557600080fd5b6000806040838503121561177e57600080fd5b82356117898161171b565b915061179760208401611759565b90509250929050565b60005b838110156117bb5781810151838201526020016117a3565b50506000910152565b600081518084526117dc8160208601602086016117a0565b601f01601f19169290920160200192915050565b60208152600061180360208301846117c4565b9392505050565b60008060008060a0858703121561182057600080fd5b61182a86866115bd565b9350606085013567ffffffffffffffff81111561184657600080fd5b611852878288016115d5565b909450925061186590506080860161161e565b905092959194509250565b60006020828403121561188257600080fd5b5035919050565b6000806040838503121561189c57600080fd5b61174b8361161e565b600080602083850312156118b857600080fd5b823567ffffffffffffffff808211156118d057600080fd5b818501915085601f8301126118e457600080fd5b8135818111156118f357600080fd5b8660208260051b850101111561190857600080fd5b60209290920196919550909350505050565b60006020828403121561192c57600080fd5b81356118038161171b565b6000806000806060858703121561194d57600080fd5b84356119588161171b565b935061196660208601611759565b9250604085013567ffffffffffffffff81111561198257600080fd5b61198e878288016115d5565b95989497509550505050565b6000602082840312156119ac57600080fd5b6118038261161e565b6000606082840312156119c757600080fd5b61180383836115bd565b600080600080608085870312156119e757600080fd5b84359350602085013592506040850135611a008161171b565b9396929550929360600135925050565b600181811c90821680611a2457607f821691505b6020821081036115cf57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611a7d57611a7d611a44565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611aac57611aac611a44565b604052919050565b600067ffffffffffffffff80841115611acf57611acf611a44565b8360051b6020611ae0818301611a83565b868152918501918181019036841115611af857600080fd5b865b84811015611bd057803586811115611b125760008081fd5b88016060368290031215611b265760008081fd5b611b2e611a5a565b8135611b398161171b565b8152611b46828701611759565b8682015260408083013589811115611b5e5760008081fd5b9290920191601f3681850112611b745760008081fd5b83358a811115611b8657611b86611a44565b611b97818301601f19168a01611a83565b91508082523689828701011115611bae5760008081fd5b808986018a840137600090820189015290820152845250918301918301611afa565b50979650505050505050565b60008085851115611bec57600080fd5b83861115611bf957600080fd5b5050820193919092039150565b60008451611c188184602089016117a0565b8201838582376000930192835250909392505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b600060208284031215611c6f57600080fd5b81516118038161171b565b600060208284031215611c8c57600080fd5b8151801515811461180357600080fd5b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201526000608085015160e0610100840152611ce86101608401826117c4565b905060a0860151607f198085840301610120860152611d0783836117c4565b925060c08801519150808584030161014086015250611d2682826117c4565b92505050611d41602083018580518252602090810151910152565b6001600160a01b0383166060830152610798565b600060408284031215611d6757600080fd5b6040516040810181811067ffffffffffffffff82111715611d8a57611d8a611a44565b604052825181526020928301519281019290925250919050565b60008082840360c0811215611db857600080fd5b6080811215611dc657600080fd5b50611dcf611a5a565b83518152602084015167ffffffffffffffff81168114611dee57600080fd5b6020820152611e008560408601611d55565b604082015291506117978460808501611d55565b634e487b7160e01b600052603260045260246000fd5b601f82111561127b576000816000526020600020601f850160051c81016020861015611e535750805b601f850160051c820191505b81811015611e7257828155600101611e5f565b505050505050565b815167ffffffffffffffff811115611e9457611e94611a44565b611ea881611ea28454611a10565b84611e2a565b602080601f831160018114611edd5760008415611ec55750858301515b600019600386901b1c1916600185901b178555611e72565b600085815260208120601f198616915b82811015611f0c57888601518255948401946001909101908401611eed565b5085821015611f2a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208083018184528085518083526040925060408601915060408160051b87010184880160005b83811015611fb757888303603f190185528151805163ffffffff1684528781015161ffff16888501528601516060878501819052611fa3818601836117c4565b968901969450505090860190600101611f63565b509098975050505050505050565b8082018082111561078557634e487b7160e01b600052601160045260246000fdfea2646970667358221220ba1274ec203df9968f9f64d5b80dc111b990fe4f0a83db23a7a167f6ef77c4f864736f6c63430008190033";

type PrincipalMigrationContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrincipalMigrationContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrincipalMigrationContract__factory extends ContractFactory {
  constructor(...args: PrincipalMigrationContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _mimo: AddressLike,
    _prl: AddressLike,
    _lockBox: AddressLike,
    _endpoint: AddressLike,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _mimo,
      _prl,
      _lockBox,
      _endpoint,
      _owner,
      overrides || {}
    );
  }
  override deploy(
    _mimo: AddressLike,
    _prl: AddressLike,
    _lockBox: AddressLike,
    _endpoint: AddressLike,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _mimo,
      _prl,
      _lockBox,
      _endpoint,
      _owner,
      overrides || {}
    ) as Promise<
      PrincipalMigrationContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): PrincipalMigrationContract__factory {
    return super.connect(runner) as PrincipalMigrationContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrincipalMigrationContractInterface {
    return new Interface(_abi) as PrincipalMigrationContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PrincipalMigrationContract {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as PrincipalMigrationContract;
  }
}
