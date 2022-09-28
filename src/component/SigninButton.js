import React, { useEffect, useState } from "react";
import Web3Modal, { local } from "web3modal";
import { connectors, useInactiveListener } from "./connectors";

import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Link } from "react-router-dom";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { ethers } from 'ethers'
import { networkParams } from "./constants";
import { symbols } from "./constants";
import { toHex } from "../helpers/utils";
import useHttp from '../Hooks/useHttp';
import { useWeb3React } from "@web3-react/core";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: `${process.env.REACT_APP_INFURA_KEY}`,// required
    },
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "web3modal", // Required
      infuraId: `${process.env.REACT_APP_INFURA_KEY}`, // Required
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 1, // Optional. It defaults to 1 if not provided
      darkMode: false, // Optional. Use dark theme, defaults to false
    },
  },
  binancechainwallet: {
    package: true,
    connector: async (ProviderPackage, options) => {
      const provider = new ProviderPackage(options);
      await provider.enable();
      return provider;
    }
  }
};
const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

//----------------------------------------------------------------------------------------------------------------//
function SigninButton() {
  const [account, setAccount] = useState(null)
  const [chainId, setChainId] = useState(null)
  const context = useWeb3React();

  const [activatingConnector, setActivatingConnector] = useState();
  const [symbol, setSymbol] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState();
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState();

  const refreshState = () => {
    window.localStorage.setItem("provider", null);
    localStorage.setItem('user', null)
  };

  const disconnect = () => {
    refreshState();
    //deactivate();
    localStorage.setItem('user', null)
  };
  const [ethBalance, setEthBalance] = useState(0.00);
  const [provider, setProvider] = useState(null)
  const [srtAdd, setSrtAddress] = useState('')
  useEffect(()=>{
 const checkAccount=async()=>{
  let web3Modal = new Web3Modal();
  const provider = await web3Modal.connect();
  setProvider(provider)
  const library = new ethers.providers.Web3Provider(provider);
  //const accounts = await library.listAccounts();
  const network = await library.getNetwork();
  const address=localStorage.getItem('user') 
  console.log("address",address)
  if(address!=="" && address !=="undefined" && address!==null){
    setAccount(address)
    setSrtAddress(address.substr(0, 8) + "...")
     const balance = await library.getBalance(address)
        //console.log(balance)
        let b = ethers.utils.formatUnits(balance);
         setEthBalance(parseFloat(b).toFixed(6));
 }
 else{
  localStorage.setItem('user', null)
 }
}
 checkAccount()
  },[])
  const connectWallet = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setNetwork(network)
      setChainId(network.chainId)
      if (provider) {
        setProvider(provider)
      }
      if (accounts) {
        setAccount(accounts[0]);
        setSrtAddress(account.substr(0, 8) + "...")
        const balance = await library.getBalance(accounts[0])
        //console.log(balance)
        let b = ethers.utils.formatUnits(balance);
        setEthBalance(parseFloat(b).toFixed(6));
        localStorage.setItem('user', accounts[0])
      }
      else {
        setEthBalance(parseFloat(0.0000).toFixed(6));
      }
    } catch (err) {
    }
  }
 
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = async (accounts) => {
        setAccount(accounts[0]);
        setSrtAddress(accounts[0].substr(0, 8) + "...")
        localStorage.setItem('user', accounts[0])
        const library = new ethers.providers.Web3Provider(provider);
        const balance = await library.getBalance(accounts[0])
        //console.log(balance)
        let b = ethers.utils.formatUnits(balance);
        setEthBalance(parseFloat(b).toFixed(6));
      };

      const handleChainChanged = async (chainId) => {
        setChainId(provider.chainId);
        const library = new ethers.providers.Web3Provider(provider);
        const balance = await library.getBalance(account)
        //console.log(balance)
        let b = ethers.utils.formatUnits(balance);
        setEthBalance(parseFloat(b).toFixed(6));
      };
      const handleDisconnect = () => {
        disconnect();
      };
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  useEffect(() => {
    if (chainId == "97" || chainId == "0x61") setSymbol("TBNB")
    if (chainId == "1"  || chainId == "0x1") setSymbol("Eth")
    if (chainId == "56" || chainId == "0x38") setSymbol("BNB")
  }, [chainId])
  //--------------------------------------------------------------------------------------------------------------//
  const [user, setUser] = useState([]);
  const { isLoading, error, sendRequest: fetchUser } = useHttp();
  useEffect(() => {
  const transformItems = (itemsObj) => {
    //console.log(itemsObj)
    setUser(itemsObj);
  };
  //console.log(user)
  if(account!==undefined && account!=="" && account!==null){
    const address={
      address:account
    }
    //alert("hello")
    fetchUser(
      { url: `${process.env.REACT_APP_IMG_SERVER}/createUser`,method:'POST',headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: {address:account} },
      transformItems
    );
  }
  }, [account]);
  return (
    <>
      {provider == null ? (
        <div className="header__action header__action--signin">
          <Link
            to="#"
            className="header__action-btn header__action-btn--signin"
          >
            <span onClick={connectWallet}>Sign In</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path>
            </svg>
          </Link>
        </div>
      ) : (
        <div className="header__action header__action--profile">
          <a
            className="header__profile-btn header__profile-btn--verified"
            href="#"
            role="button"
            id="dropdownMenuProfile"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={require("../assets/img/avatars/robots.jpg")} alt="" />
            <div>
              
              <p>{srtAdd}</p>
              <span>
                {ethBalance} {symbol}
              </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
            </svg>
          </a>

          <ul
            className="dropdown-menu header__profile-menu"
            aria-labelledby="dropdownMenuProfile"
          >
            <li>
              <Link to={`${process.env.PUBLIC_URL}/account`}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/edit-profile`}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
                <span>Edit Profile</span>
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/activity`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
                </svg>
                <span>Activity</span>
              </Link>
            </li>
            <li>
            <Link to={`${process.env.PUBLIC_URL}/myCollections`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
              </svg>
              <span>My Collections</span>
            </Link>
          </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/create-item`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z" />
                </svg>
                <span>Create new item</span>
              </Link>
            </li>

            <li>
              <a href="javascript:void(0)" onClick={disconnect}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
                </svg>
                <span onClick={() => { setProvider(null) }}>Sign out</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default SigninButton;
