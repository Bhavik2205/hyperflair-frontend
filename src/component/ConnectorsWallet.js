import React from "react";
import { connectors } from "./connectors";
import { useWeb3React } from "@web3-react/core";

export default function ConnectorsWallet() {
  const { activate, deactivate } = useWeb3React();

  return (
    <>
      <button
        onClick={() => {
          activate(connectors.walletConnect);
        }}
      >
        Wallet Connect
      </button>
      <button
        onClick={() => {
          activate(connectors.injected);
        }}
      >
        Metamask
      </button>
    </>
  );
}
