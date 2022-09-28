import React,{useState} from 'react'
import Web3Modal from "web3modal";
import {ethers} from 'ethers'



export const useContract=async({address,abi})=>{
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer=provider.getSigner()
    const Contract1=new ethers.Contract(address,abi,provider)
    const Contract2=new ethers.Contract(address,abi,signer)
    return{
        Contract1,
        Contract2
    }
}

