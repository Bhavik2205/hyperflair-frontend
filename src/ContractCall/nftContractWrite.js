import {NFT_Abi, NFT_Address} from '../Constant/Contract/NftContract'
import React,{useEffect, useState} from 'react'

import Web3Modal from "web3modal";
import {ethers} from 'ethers'

export default function NftContractWrite(props) {
    const[account,setAccount]=useState(null)
    const[nftContractRead,setNftContractRead]=useState(null)
  const[nftContractWrite,setNftContractWrite]=useState(null)
  
    const contractIntialization=async({method,value,transoformFunction})=>{
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(connection);
        const accounts = await library.listAccounts();
        setAccount(accounts[0])
        const provider = new ethers.providers.Web3Provider(connection);
        const signer=provider.getSigner()
        const Contract1=new ethers.Contract(NFT_Address,NFT_Abi,provider)
        const Contract2=new ethers.Contract(NFT_Address,NFT_Abi,signer)
        setNftContractRead(Contract1)
        setNftContractWrite(Contract2)
       
    
      }
      const applyMethod=async()=>{
        const tx=await nftContractRead.method(
            ...value
        )
        transoformFunction(tx)
      }
      useEffect(()=>{
        applyMethod()
      },)
    return (
        <>
       
        </>
    )
}
