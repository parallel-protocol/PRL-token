type VerifyConfig = {
  etherscan: {
    apiUrl: string;
    apiKey: string;
  };
};

export const getVerifyConfig = (network: string): VerifyConfig => {
  switch (network) {
    case "mainnet": {
      if (!process.env.ETHSCAN_API_KEY) throw new Error("ETHSCAN_API_KEY is not set");
      return {
        etherscan: {
          apiUrl: "https://api.etherscan.io",
          apiKey: process.env.ETHSCAN_API_KEY,
        },
      };
    }
    case "sepolia": {
      if (!process.env.ETHSCAN_API_KEY) throw new Error("ETHSCAN_API_KEY is not set");
      return {
        etherscan: {
          apiUrl: "https://api-sepolia.etherscan.io",
          apiKey: process.env.ETHSCAN_API_KEY,
        },
      };
    }
    case "polygon": {
      if (!process.env.POLYSCAN_API_KEY) throw new Error("POLYSCAN_API_KEY is not set");
      return {
        etherscan: {
          apiUrl: "https://api.polygonscan.com",
          apiKey: process.env.POLYSCAN_API_KEY,
        },
      };
    }
    case "amoy": {
      if (!process.env.POLYSCAN_API_KEY) throw new Error("POLYSCAN_API_KEY is not set");
      return {
        etherscan: {
          apiUrl: "https://api-amoy.polygonscan.com",
          apiKey: process.env.POLYSCAN_API_KEY,
        },
      };
    }
    case "arbiSepolia": {
      if (!process.env.ARBISCAN_API_KEY) throw new Error("ARBISCAN_API_KEY is not set");
      return {
        etherscan: {
          apiUrl: "https://api-sepolia.arbiscan.io",
          apiKey: process.env.ARBISCAN_API_KEY,
        },
      };
    }
    case "fantom": {
      if (!process.env.FTMSCAN_API_KEY) throw new Error("FTMSCAN_API_KEY is not set");
      return {
        etherscan: {
          apiUrl: "https://api.ftmscan.com",
          apiKey: process.env.FTMSCAN_API_KEY,
        },
      };
    }
    default: {
      throw new Error(`${network} Network Verify not configured`);
    }
  }
};
