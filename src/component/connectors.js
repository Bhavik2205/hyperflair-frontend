import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UnsupportedChainIdError,
  initializeConnector,
  useWeb3React,
} from "@web3-react/core";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";

import { BscConnector } from "@binance-chain/bsc-connector";
import { rpc_url } from "./constants";
import { useEffect } from "react";

const supported_chain_id = Object.keys(rpc_url).map((key, item) => {
  return parseInt(key);
});

const POLLING_INTERVAL = 12000;

export const injected = new InjectedConnector({
  supportedChainIds: supported_chain_id,
});

const bsc = new BscConnector({
  supportedChainIds: supported_chain_id, // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: rpc_url,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  bscwallet: bsc,
};

export function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();
  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected);
      };
      const handleChainChanged = (chainId) => {
        activate(injected);
      };
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          activate(injected);
        }
      };
      const handleNetworkChanged = (networkId) => {
        activate(injected);
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}

export const supportChainId = supported_chain_id;
