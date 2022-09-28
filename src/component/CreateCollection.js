import {NFT_Abi, NFT_Address} from '../Constant/Contract/NftContract'
import React, { useEffect, useState } from "react";
import { Trade_Abi, Trade_Address } from '../Constant/Contract/TradeContract';
import { create, globSource } from 'ipfs-http-client'

import $ from "jquery";
import ImageUploading from "react-images-uploading";
import Web3Modal from "web3modal";
import { Web3Storage } from 'web3.storage'
import {ethers} from 'ethers'
import { useContract } from "../Hooks/useContract";
import useHttp from '../Hooks/useHttp';

const client = new Web3Storage({ token: `${process.env.REACT_APP_TOKEN_ID}` })
//const client=create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

const CreateItem = () => {
  const[nftContractRead,setNftContractRead]=useState(null)
  const[nftContractWrite,setNftContractWrite]=useState(null)
  const[file,setFile]=useState([])
  const[name,setName]=useState(null)
  const[link,setLink]=useState(null)
  const[des,setDes]=useState(null)
  const[level,setLevel]=useState({Name:"",val1:"",val2:""})
  const[stats,setStats]=useState({Name:"",val1:"",val2:""})
  const[unlockableContent,setUnlockableContent]=useState(false)
  const[explicit,setexplicit]=useState(false)
  const[account,setAccount]=useState(null)
  const[supply,setSupply]=useState(1)
  const[blockchain,setBlockChain]=useState(1)
  const[nftTradeConTractRead,setNftTradeContractRead]=useState(null)
  const[nftTradeConTractWrite,setNftTradeContractWrite]=useState(null)
  const { isLoading, error, sendRequest: fetchUser } = useHttp();
//---------------------------------------------Dynamic Fields----------------------------------------------------//
const [properties, setProperties]= useState([{ Type: "",Name:"" }]);
const handleServiceChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...properties];
  list[index][name] = value;
  console.log(list)
  setProperties(list);
};

const handleServiceRemove = (index,) => {
  const list = [...properties];
  list.splice(index, 1);
  setProperties(list);
};

const handleServiceAdd = () => {
  setProperties([...properties, { Type: "",Name:"" }]);
};

//---------------------------------------------------------------------------------------------------------------//

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const contractIntialization=async()=>{
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(connection);
      const accounts = await library.listAccounts();
      setAccount(accounts[0])
      const provider = new ethers.providers.Web3Provider(connection);
      const signer=provider.getSigner()
      const Contract1=new ethers.Contract(NFT_Address,NFT_Abi,provider)
      const Contract2=new ethers.Contract(NFT_Address,NFT_Abi,signer)
      const Contract3=new ethers.Contract(Trade_Address,Trade_Abi,signer)
      setNftContractRead(Contract1)
      setNftContractWrite(Contract2)
      setNftTradeContractWrite(Contract3)
    }

     const createNFT=async()=>{
      const tokenURI="abc"
      const royality=20
      const val= ethers.utils.parseUnits('0.1',18)
      const data=new FormData()
      data.append("name",name)
      data.append("external_link",link)
      data.append("description",des)
      data.append("unlockable_content",unlockableContent)
      data.append("explicit",explicit)
      data.append("supply",supply)
      data.append("NFT",file)
      data.append("blockchain",blockchain)
      data.append("levels",level)
      data.append("stats",stats)
      data.append("properties",properties)
       if(!file && !name && !link || file==="" && name ==="" && link ==="" || file===undefined||null && name===undefined||null && link===undefined||null ) {
          alert("please fill the fields")
       }
      try{
        const transformItems = (itemsObj) => {
           console.log(itemsObj)
          // setUser(itemsObj);
          // setName(itemsObj.name)
          // setBio(itemsObj.bio)
          // setTwitter(itemsObj.twitter)
          // setInstagram(itemsObj.instagram)
          // setWebsite(itemsObj.website)
          // setEmail(itemsObj.email)
          // // setImages(itemsObj.profile)
          // // setCover(itemsObj.cover)
          };
        fetchUser(
          { url: `${process.env.REACT_APP_IMG_SERVER}/api/nft/create`,method:'POST',headers: { 'Content-Type': 'multipart/form-data' }, body: {data} },
          transformItems
          );
      }catch(error){
        console.log(error)
      }
    
    const tx=await nftContractWrite.mint(
      account,
      tokenURI,
      royality,
      {
        value: val
      }
    )
    await tx.wait()
    console.log("Transaction Hash:",tx.hash)
     
const approval=await nftContractWrite.setApprovalForAll(
  NFT_Address,
  true
)
await approval.wait()
console.log("Transaction Hash:",approval.hash)
}



//----------------------------------------------------------------------------------------------------------------//
//function calls
useEffect(()=>{
  contractIntialization()
},[])
  $(function () {
    $("#switch-id").change(function () {
      if ($(this).is(":checked")) {
        $(".unlock-textarea").show();
      } else {
        $(".unlock-textarea").hide();
      }
    });
  });
  // switch textarea hide & show over

  const [images, setImages] = React.useState([]);

  const onChange =async (imageList, addUpdateIndex) => {
    setFile(imageList)
    setImages(imageList);
    console.log(imageList[0].file)
    const file=imageList[0].file
    if(typeof file !== 'undefined'){
      try{
        //const result=await client.add(file)
        //setFile(`https://ipfs.infura.io/ipfs/${result.path}`)
        //console.log(result)
      }catch(err){
        console.log(err)
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row row--grid justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="main__title main__title--left">
              <h2>Create a Collection</h2>
            </div>
            <form className="sign__form sign__form--create">
              <p className="required-field">
                <span>*</span> Required fields
              </p>
              <div className="sign__group">
                <label
                  className="sign__label required-field"
                  htmlFor="itemname"
                >
                  Logo Image
                  <span className="ml-2">*</span>
                </label>
                <p className="f-12 f-500">
                  File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                  OGG, GLB, GLTF. Max size: 100 MB
                </p>
            
                <ImageUploading
                  value={images}
                  onChange={onChange}
                  dataURLKey="data_url"
                  name="image"
                  
                >
                  {({ imageList, onImageUpload, isDragging, dragProps }) => (
                    <div className="upload__image-wrapper" >
                      <div
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                        className="upload-img-wrapper"
                      >
                        Click or Drop here (max file size)
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image.data_url} alt="" />
                          </div>
                        ))}
                        <button type="button" className="edit-profile-pic">
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                      </div>
                    </div>
                  )}
                </ImageUploading>
              </div>

              <div className="sign__group">
              <label
                className="sign__label required-field"
                htmlFor="itemname"
              >
              Featured image
                <span className="ml-2">*</span>
              </label>
              <p className="f-12 f-500">
              This image will be used for featuring your collection on the homepage, category pages, or other promotional areas of OpenSea. 600 x 400 recommended.
              </p>
          
              <ImageUploading
                value={images}
                onChange={onChange}
                dataURLKey="data_url"
                name="image"
                style={{width:"200px",borderRadius:"50%"}}
              >
                {({ imageList, onImageUpload, isDragging, dragProps }) => (
                  <div className="upload__image-wrapper">
                    <div
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                      className="upload-img-wrapper"
                    >
                      Click or Drop here (max file size)
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image.data_url} alt="" />
                        </div>
                      ))}
                      <button type="button" className="edit-profile-pic">
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>

            <div className="sign__group">
            <label
              className="sign__label required-field"
              htmlFor="itemname"
            >
            Banner image
              <span className="ml-2">*</span>
            </label>
            <p className="f-12 f-500">
            This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 350 recommended.
            </p>
        
            <ImageUploading
              value={images}
              onChange={onChange}
              dataURLKey="data_url"
              name="image"
              style={{width:"200px",borderRadius:"50%"}}
            >
              {({ imageList, onImageUpload, isDragging, dragProps }) => (
                <div className="upload__image-wrapper">
                  <div
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                    className="upload-img-wrapper"
                  >
                    Click or Drop here (max file size)
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" />
                      </div>
                    ))}
                    <button type="button" className="edit-profile-pic">
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>

              <div className="sign__group">
                <label
                  className="sign__label required-field"
                  htmlFor="itemname"
                >
                  Name<span className="ml-2">*</span>
                </label>
                <input
                  type="text"
                  name="itemname"
                  className="sign__input"
                  placeholder="Item Name"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </div>
              <div className="sign__group">
                <label className="sign__label required-field" htmlFor="eLinks">
                  External link<span className="ml-2">*</span>
                </label>
                <p className="f-12 f-500">
                  Hyperflair will include a link to this URL on this item's
                  detail page, so that users can click to learn more about it.
                  You are welcome to link to your own webpage with more details.
                </p>
                <input
                  type="text"
                  name="eLinks"
                  className="sign__input"
                  placeholder="https://yoursite.io"
                  value={link}
                  onChange={(e)=>{setLink(e.target.value)}}
                />
              </div>
              <div className="sign__group">
                <label
                  className="sign__label required-field "
                  htmlFor="description"
                >
                  Description
                </label>
                <p className="f-12 f-500">
                  The description will be included on the item's detail page
                  underneath its image. Markdown syntax is supported.
                </p>
                <textarea
                  id="description"
                  name="description"
                  className="sign__textarea"
                  placeholder="Provide a detailed description of your item."
                  value={des}
                  onChange={(e)=>{setDes(e.target.value)}}
                ></textarea>
              </div>
<div style={{width:"50%",alignItem:"left"}} class='sign__group'>
<label
className="sign__label required-field "
htmlFor="description"
>
Category
</label>
<p className="f-12 f-500">
Adding a category will help make your item discoverable on Hyper-Flair NFT.


</p>
              <div class="btn-group " >
  <button type="button" className="btn  dropdown-toggle sign__btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"300px"}}>
    Action 
  </button>
  <div class="dropdown-menu" style={{borderRadius:"5px",zIndex:"999"}}>
    <a class="dropdown-item" href="#" >Art</a>
    <a class="dropdown-item" href="#">Collectibles</a>
   
  </div>
</div>
</div>

<ul class="list-group mb-5" style={{borderRadius:"10px" ,width:"100%"}}>
  <li class="list-group-item" > <i className="fa-solid fa-globe" style={{color:"#9c9991"}}></i>&nbsp; <input type="text" placeholder='yoursite' style={{border:"none"}} /></li>  
  <li class="list-group-item"><i className="fa-brands fa-discord" style={{color:"#9c9991"}}></i>&nbsp; <input type="text" placeholder='https://discord.gg/abcd' style={{border:"none"}} /></li>  
  <li class="list-group-item"> <i class="fa-sharp fa-solid fa-m" style={{color:"#9c9991"}}></i> &nbsp; <input type="text" placeholder='https://www.medium.com/@YourMediumHandle' style={{border:"none"}} /></li>  
  <li class="list-group-item"><i class="fa-brands fa-telegram" style={{color:"#9c9991"}}></i> &nbsp; <input type="text" placeholder='https://t.me/abcd' style={{border:"none"}} /></li>  
  
</ul>


              
              <div className="asset--form">
                <div className="asset--content">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <div className="asset--content--main">
                    <span className="asset--content--label">
                      Explicit & Sensitive Content
                    </span>
                    <p className="asset--content--header">
                      Set this item as explicit and sensitive content
                    </p>
                  </div>
                </div>
                <div className="asset--side">
                  <div className="custom-control custom-switch ">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="explicit"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="explicit"
                    ></label>
                  </div>
                </div>
              </div>
           
              <div className="sign__group mt-3">
                <label className="sign__label" htmlFor="Blockchain">
                  Blockchain
                </label>
                <div className="filter__group mt-2">
                  <ul className="filter__checkboxes">
                    <li>
                      <input
                        id="type5"
                        type="checkbox"
                        name="type5"
                        defaultChecked=""
                        onClick={()=>{setBlockChain(1)}}
                      />
                      <label htmlFor="type5">
                        <img
                          src={require("../assets/img/bnb2.png")}
                          className="w-25px"
                          alt="BNB"
                        />
                        &nbsp;Binance Network Chain
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <button type="button" className="sign__btn" onClick={createNFT}>
                    Create item
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add Properties Modals */}
      <div
        className="modal fade"
        id="addpreoperModal"
        tabIndex="-1"
        aria-labelledby="addpreoperModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="font-weight-bold modal-title text-body"
                id="exampleModalLabel"
              >
                Add Properties
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Properties show up underneath your item, are clickable, and can
                be filtered in your collection's sidebar.
              </p>
              <form action="sign__form sign__form--create">
              {properties.map((singleService, index) => (
                <div className="row align-items-center" key={index}>
                  <div className="col-md-5">
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="type">
                        Type
                      </label>
                      <input
                        type="text"
                        className="sign__input"
                        id="type"
                        name="Type"
                        value={singleService.Type}
                        placeholder="Character"
                        onChange={(e)=>handleServiceChange(e,index)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="sign__input"
                        id="name"
                        placeholder="Name"
                        name="Name"
                        value={singleService.Name}
                        onChange={(e)=>handleServiceChange(e,index)}
                      />
                    </div>
                  </div>
                  {properties.length !== 1 && (
                    <div className="col-md-2">
                    <div className="asset--side">
                      <a
                        href="#addpreoperModal"
                        className="feature__icon feature__icon--green mt-0"
                        data-toggle="modal"
                        data-target="#addpreoperModal"
                        onClick={handleServiceRemove}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </a>
                    </div>
                  </div>
                  )}
                  {properties.length - 1 === index && properties.length < 4 && (
                  <div className="col-md-2">
                    <div className="asset--side">
                      <a
                        href="#addpreoperModal"
                        className="feature__icon feature__icon--green mt-0"
                        data-toggle="modal"
                        data-target="#addpreoperModal"
                        onClick={handleServiceAdd}
                        style={properties.length>1?{marginLeft:"200px",marginBottom:"20px"}:{}}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  )}
                 
                </div>
  ))}
                <div className="row">
                  <div className="col-md-4 col-lg-4">
                    <button type="button" className="sign__btn m-0">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add Leve Modals */}
      <div
        className="modal fade"
        id="levelModal"
        tabIndex="-1"
        aria-labelledby="levelModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="font-weight-bold modal-title text-body"
                id="levelModal"
              >
                Add Levels
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Levels show up underneath your item, are clickable, and can be
                filtered in your collection's sidebar.
              </p>
              <form action="sign__form sign__form--create">
                <div className="row">
                  <div className="col">
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="sign__input"
                        id="name"
                        placeholder="Name"
                        value={level.Name}
                        onChange={(e)=>{setLevel({Name:e.target.value})}}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <label className="sign__label" htmlFor="name">
                        Value
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control sign__input"
                          placeholder="0"
                          aria-label="Value"
                          aria-describedby="basic-addon2"
                          value={level.val1}
                        onChange={(e)=>{setLevel({val1:e.target.value})}}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            of
                          </span>
                        </div>
                        <input
                          type="number"
                          className="form-control sign__input"
                          placeholder="0"
                          aria-label="Value"
                          aria-describedby="basic-addon2"
                          value={level.val2}
                          onChange={(e)=>{setLevel({val2:e.target.value})}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-lg-4">
                    <button type="button" className="sign__btn m-0">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add Stats Modals */}
      <div
        className="modal fade"
        id="statsModal"
        tabIndex="-1"
        aria-labelledby="statsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="font-weight-bold modal-title text-body"
                id="statsModal"
              >
                Add Stats
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Stats show up underneath your item, are clickable, and can be
                filtered in your collection's sidebar.
              </p>
              <form action="sign__form sign__form--create">
                <div className="row">
                  <div className="col">
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="sign__input"
                        id="name"
                        placeholder="Name"
                        value={stats.Name}
                        onChange={(e)=>setStats({Name:e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <label className="sign__label" htmlFor="name">
                        Value
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control sign__input"
                          placeholder="0"
                          aria-label="Value"
                          aria-describedby="basic-addon2"
                          value={stats.val1}
                        onChange={(e)=>setStats({val1:e.target.val1})}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            of
                          </span>
                        </div>
                        <input
                          type="number"
                          className="form-control sign__input"
                          placeholder="0"
                          aria-label="Value"
                          aria-describedby="basic-addon2"
                          value={stats.val2}
                        onChange={(e)=>setStats({val2:e.target.val2})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-lg-4">
                    <button type="button" className="sign__btn m-0">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Supplay Modal */}
      <div
        className="modal fade"
        id="supplyModal"
        tabIndex="-1"
        aria-labelledby="supplyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="font-weight-bold modal-title text-body"
                id="supplyModal"
              >
                How does token supply work?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="accordion mt-0" id="accordionExample2">
                <div className="card">
                  <div className="card-head" id="headeOne">
                    <h2
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapsOne"
                      aria-expanded="false"
                      aria-controls="collapsOne"
                    >
                      01. What is minting?
                    </h2>
                  </div>
                  <div
                    id="collapsOne"
                    className="collapse"
                    aria-labelledby="headeOne"
                    data-parent="#accordionExample2"
                  >
                    <div className="card-body">
                      <p>
                        Minting is an action that brings an item into existence
                        on the blockchain, and costs gas to do so. Minting using
                        Hyperflair tools is lazy, meaning it only occurs when
                        necessary:
                        <br />
                        <span className="pl-3 pt-2">
                          1. When you transfer an item to another account
                        </span>
                        <br />
                        <span className="pl-3 pb-2">
                          2. When someone buys an item from you
                        </span>
                        <br />
                        This means that you can create as much as you want here
                        for free.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mt-2">
                  <div className="card-head" id="headeTwo">
                    <h2
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapsTwo"
                      aria-expanded="false"
                      aria-controls="collapsTwo"
                    >
                      02. How are limits enforced?
                    </h2>
                  </div>
                  <div
                    id="collapsTwo"
                    className="collapse"
                    aria-labelledby="headeTwo"
                    data-parent="#accordionExample2"
                  >
                    <div className="card-body">
                      <p>
                        The maximum supply ("hard cap") of your NFT will be
                        encoded in its ID. This allows the smart contract to
                        check whether any more are allowed to be minted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateItem;
