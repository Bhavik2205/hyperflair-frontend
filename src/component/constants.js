export const rpc_url = {
  1: "https://mainnet.infura.io/v3/34968a5ba79c4c1280390328d50427ce",
  3: "https://ropsten.infura.io/v3/",
  56: "https://bsc-dataseed.binance.org/",
  97: "https://data-seed-prebsc-1-s1.binance.org:8545",
};

export const networkParams = {
  "0x1": {
    chainId: "0x1",
    rpcUrls: ["https://mainnet.infura.io/v3/34968a5ba79c4c1280390328d50427ce"],
    chainName: "Ethereum Mainnet",
    nativeCurrency: { name: "Ethereum", decimals: 18, symbol: "ETH" },
    blockExplorerUrl: ["https://etherscan.io"],
    iconUrls: [""],
  },
  "0x3": {
    chainId: "0x3",
    rpcUrls: ["https://ropsten.infura.io/v3/"],
    chainName: "Ropsten Test Network",
    nativeCurrency: { name: "Ethereum", decimals: 18, symbol: "ETH" },
    blockExplorerUrl: ["https://etherscan.io"],
    iconUrls: [""],
  },
  "0x38": {
    chainId: "0x38",
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    chainName: "Binance Smart Chain",
    nativeCurrency: { name: "Binance", decimals: 18, symbol: "ETH" },
    blockExplorerUrl: ["https://bscscan.com"],
    iconUrls: [""],
  },
  "0x61": {
    chainId: "0x61",
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: { name: "Binance", decimals: 18, symbol: "ETH" },
    blockExplorerUrl: ["https://bscscan.com"],
    iconUrls: [""],
  },
};

export const contracts = {
  "0x1": {
    tokenContract: "",
    nftContract: "",
  },
  "0x3": {
    tokenContract: "",
    nftContract: "",
  },
  "0x38": {
    tokenContract: "",
    nftContract: "",
  },
  "0x61": {
    tokenContract: "",
    nftContract: "",
  },
};

export const symbols = {
  1: "ETH",
  3: "ETH",
  56: "BNB",
  97: "BNB",
};
