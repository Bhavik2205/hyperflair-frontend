import React, {useEffect, useState} from "react";
import { Trade_Abi, Trade_Address } from '../Constant/Contract/TradeContract';

import $ from 'jquery';
import Error from './Modals/error';
import { Link } from 'react-router-dom';
import Loading from './Modals/loading';
import Sell from './Modals/sell';
import Transaction from './Modals/transaction';
import Web3Modal from "web3modal";
import eth from '../assets/img/eth.svg';
import { ethers } from 'ethers'
import useHttp from '../Hooks/useHttp';

const ViewProfile = () => {
    const [user, setUser] = useState([]);
	const[bio,setBio]=useState("")
	const[website,setWebsite]=useState("")
	const[images, setImages] = React.useState([]);
	const[cover, setCover] = React.useState([]);
	const{ isLoading, error, sendRequest: fetchUser } = useHttp();
	const[instagram,setInstagram]=useState('')
	const[twitter,setTwitter]=useState('')
	const[account,setAccount]=useState(null)
	const[name,setName]=useState(null)
	const[email,setEmail]=useState(null)
    const[createdAt,setCreatedAt]=useState(Date)
    const[nftTradeConTractRead,setNftTradeContractRead]=useState(null)
    const[nftTradeConTractWrite,setNftTradeContractWrite]=useState(null)

    const[errorshow,setErrorShow]=useState(false)
  const handleErrorShow=()=>{setErrorShow(true)}
  const handleErrorHide=()=>{setErrorShow(false)}

  const[transactionShow,setTransactionShow]=useState(false)
  const handleTransactionShow=()=>{handleWaitHide();setTransactionShow(true)}
  const handleTransactionHide=()=>{setTransactionShow(false)}

  const[waitShow,setWaitShow]=useState(false)
  const handleWaitShow=()=>{setWaitShow(true)}
  const handleWaitHide=()=>{setWaitShow(false)}

  const [sellShow,setSellShow]=useState(false)
  const handleSellShow=()=>{setSellShow(true)}
  const handleSellHide=()=>{setSellShow(false)}

  const[errorMsg,setErrorMsg]=useState('')
  const[tx,setTx]=useState("")

  const[sellPrice,setSellPrice]=useState('')
  const handleSellPrice=(e)=>{
    setSellPrice(e.target.value)
  }

  const[sellNFT,setSellNFT]=useState(false)
  
  const sellNFTToken=(data)=>{
    handleSellHide()
    handleWaitShow()
    setSellNFT(data)
  }
  console.log(sellNFT)
    //--------------------------------------------- init Method --------------------------------------------------//
    const init=async()=>{
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(connection);
	const accounts = await library.listAccounts();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer=provider.getSigner()
	setAccount(accounts[0])
    const Contract3=new ethers.Contract(Trade_Address,Trade_Abi,signer)
    setNftTradeContractWrite(Contract3)
   }

   useEffect(()=>{
    init()
   },[])
   const[activeIndex,setActiveIndex]=useState(0)
   const toggleClass=(e,index)=> {
   setActiveIndex(index);
};
//------------------------------------------------------- Fetch Details ----------------------------------------------------//
    useEffect(() => {
          const image=[]
          const coverImage=[]
          const transformItems = (itemsObj) => {
          console.log(itemsObj)
          const url=`${process.env.REACT_APP_IMG_SERVER}/images/${itemsObj.profile}`
          const Coverurl=`${process.env.REACT_APP_IMG_SERVER}/images/${itemsObj.cover}`
          var monthNames = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
          var newDate = new Date(Date.UTC(itemsObj.created_at))
          console.log(newDate)
          var formattedDate = monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear();
          setCreatedAt(itemsObj.created_at)
          setUser(itemsObj);
          setName(itemsObj.name)
          setBio(itemsObj.bio)
          setTwitter(itemsObj.twitter)
          setInstagram(itemsObj.instagram)
          setWebsite(itemsObj.website)
          setEmail(itemsObj.email)
          setImages(url)
          setCover(Coverurl)
        };
        if(account!==undefined && account!=="" && account!==null){
            const address={
              address:account
            }
            fetchUser(
              { url: `${process.env.REACT_APP_IMG_SERVER}/createUser`,method:'POST',headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: {address:account} },
              transformItems
            );
          }
          },[account]);
//--------------------------------------------- Add to Bundle -------------------------------------------------------//
    
const[items,setItems]=useState([])
    const addItem=(id,name,img,collection)=>{
    const data={id,name,img,collection}
    const myData=JSON.stringify(data)
    setItems((item)=>{
        return[...item,myData]
    })
 }

//--------------------------------------------- Ready To Sell Token -------------------------------------------------//

const readyToSellToken=async()=>{
    try{  
        const _token_id=13
        const val=ethers.utils.parseUnits(sellNFT,18)
        const tx=await nftTradeConTractWrite.readyToSellToken(_token_id,val)
        await tx.wait()
        setTx(tx)
        handleTransactionShow()
        console.log(tx)
    }catch(error){
        handleWaitHide()
        setErrorMsg(error)
    }
  }

  useEffect(()=>{
    if(sellNFT){
        readyToSellToken()
    }
  },[sellNFT])
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  
    return (
        <>
            <div className="main__author main__author__bg" style={{ backgroundImage:`url(${cover})`}}>
                <div className='edit-cover mb-5'>
                    <Link to={`${process.env.PUBLIC_URL}/edit-profile`} className='btn-primary'>Edit Cover</Link>
                </div>
            </div>
            <br/>
            <br />
         
            <div className="container">
                <div className="creator-block">
                    <div className='creator-img'>
                        <img src={images} alt="" />
                        <Link to={`${process.env.PUBLIC_URL}/edit-profile`} className='edit-profile-pic'><i className="fa-solid fa-pencil"></i></Link>
                    </div>
                    <div className='sm-ml-2'>
                        <div className='creator-title'>
                            <h1>{name}</h1>
                        </div>
                        <div className='creator-address'>
                            <img src={require('../assets/img/bnb.png')} alt="" />
                            <p>{account}</p>
                        </div>
                        <div className='created-by'>
                            Joined {createdAt}
                        </div>
                        <div className='creator-description'>
                            <span>{bio}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container profile-navbar" >
            <div className="row">
            <div className="col">
            <nav class="navbar navbar-expand-lg navbar-light mb-0 pb-0" style={{fontSize:"1.5rem"}}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <a className={activeIndex===0?'nav-item nav-link active':'nav-item nav-link'} href="#" onClick={(e)=>toggleClass(0)}>Collected</a>
                <a className={activeIndex===1?'nav-item nav-link active':'nav-item nav-link'} href="#" onClick={(e)=>toggleClass(1)}>Created</a>
                <a className={activeIndex===2?'nav-item nav-link active':'nav-item nav-link'} href="#" onClick={(e)=>toggleClass(2)}>Favorited</a>
                <a className={activeIndex===3?'nav-item nav-link active':'nav-item nav-link'} href="#" onClick={(e)=>toggleClass(3)}>Activity</a> 
              </div>
            </div>
          </nav>
            </div>
            </div>
            </div>
            <hr />
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12 col-xl-3">
                        <div className="filter-wrap">
                            <button className="filter-wrap__btn" type="button" data-toggle="collapse" data-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">Open filter</button>
                            <div className="collapse filter-wrap__content" id="collapseFilter">
                                <div className="filter">
                                    <h4 className="filter__title">Filters <button type="button">Clear all</button></h4>
                                    <div className="filter__group">
                                        <label className="filter__label">Search:</label>
                                        <input type="text" className="filter__input" placeholder="Keyword" />
                                    </div>
                                    <div className="filter__group">
                                        <label htmlFor="sort" className="filter__label">Status</label>

                                        <div className="filter__select-wrap">
                                            <select name="sort" id="sort" className="filter__select">
                                          
                                                <option value="0">Buy Now</option>
                                                <option value="1">On Auction</option>
                                                <option value="2">New</option>
                                                <option value="3">Has Offer</option>
                                                <option value="4">Buy With Card</option>
                                               
                                            </select>
                                        </div>
                                    </div>

                                    <div className="filter__group">
                                        <label className="filter__label">Category:</label>
                                        <ul className="filter__checkboxes">
                                            <li>
                                                <input id="type5" type="checkbox" name="type5" defaultChecked="" />
                                                <label htmlFor="type5">Art</label>
                                            </li>
                                            <li>
                                                <input id="type6" type="checkbox" name="type6" />
                                                <label htmlFor="type6">Photography</label>
                                            </li>
                                            <li>
                                                <input id="type7" type="checkbox" name="type7" defaultChecked="" />
                                                <label htmlFor="type7">Games</label>
                                            </li>
                                            <li>
                                                <input id="type8" type="checkbox" name="type8" defaultChecked="" />
                                                <label htmlFor="type8">Metaverses</label>
                                            </li>
                                            <li>
                                                <input id="type9" type="checkbox" name="type9" />
                                                <label htmlFor="type9">Music</label>
                                            </li>
                                            <li>
                                                <input id="type10" type="checkbox" name="type10" />
                                                <label htmlFor="type10">Domains</label>
                                            </li>
                                            <li>
                                                <input id="type11" type="checkbox" name="type11" />
                                                <label htmlFor="type11">Memes</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter__group">
                                        <label htmlFor="sort" className="filter__label">Price Range</label>

                                        <div className="filter__select-wrap">
                                            <select name="sort" id="sort" className="filter__select">
                                                <option value="0">BNB</option>
                                                <option value="1">FLAIR</option>
                                            </select>
                                            <div className="row mt-2">
                                                <div className="col-6">
                                                    <input type="text" className="filter__input" placeholder="Min" name="min" />
                                                </div>
                                                <div className="col-6">
                                                    <input type="text" className="filter__input" placeholder="Max" name="max" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter__group">
                                        <button className="filter__btn" type="button">APPLY FILTER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xl-9'>
                        <div className='row row--grid'>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton" >
                                                <a className="dropdown-item"  href="#menu-toggle" id="menu-toggle"onClick={handleSellShow}>Sell</a>
                                            <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                                                Walking on Air
                                            </Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                                                Walking on Air
                                            </Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                                                Walking on Air
                                            </Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                                                Walking on Air
                                            </Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-4'>
                                <div className="card">
                                    <div className='card__header'>
                                        <div className='user__icon_group'>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                                </div>
                                            </div>
                                            <div className='user-hover'>
                                                <div className='user__icon'>
                                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom__dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </span>
                                            <div className="dropdown-menu custom__drop" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Place bid</a>
                                                <a className="dropdown-item" href="#">Buy now</a>
                                                <a className="dropdown-item" href="#">Share</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="card__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="card__title">
                                        <h3>
                                            <Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link>
                                        </h3>
                                        <img src={eth} alt="" className='pair-icon' />
                                    </div>
                                    <div className="card_price">
                                        <span>55.555 ETH</span>
                                        <span>1/1</span>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <a href="">
                                                <span>Buy Now</span>
                                            </a>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
         
            <Error show={errorshow} hide={handleErrorHide} errorMsg={errorMsg}/>
      <Loading show={waitShow} hide={handleWaitHide} />
      <Transaction show={transactionShow} hide={handleTransactionHide} tx={tx} />
      <Sell show={sellShow} hide={handleSellHide} value={sellPrice} sellNFTToken={sellNFTToken} onChange={handleSellPrice}/>
        </>
    )
}
export default ViewProfile