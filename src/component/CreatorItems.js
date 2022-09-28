import { Link } from 'react-router-dom';

import eth from '../assets/img/eth.svg';
import bg from '../assets/img/bg/bg.png';
import React, { useEffect } from 'react';
import $ from 'jquery';

const CreatorItems = () => {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <div className="main__author main__author__bg" style={{ background: "url(" + bg + ")" }}></div>
            <div className="container">
                <div className="creator-block">
                    <div>
                        <div className='creator-img'>
                            <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                        </div>
                        <div className='item--collection-toolbar-wrapper text-center d-flex justify-content-between'>
                            <button type="button" className="btn-primary">Follow</button>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-outline-secondary" data-toggle="tooltip" data-placement="top" title="View on Akuma Origins">
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </button>
                                <div className="btn-group" role="group" data-toggle="tooltip" data-placement="top" title="Share">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-share-nodes"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                        <a className="dropdown-item" href="#">
                                            <img src={require('../assets/img/flair.png')} alt="" style={{ width: '16px' }} className="mr-2" />Copy Link
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fa-brands fa-facebook-f mr-2"></i>Share on Facebook
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fa-brands fa-twitter mr-2"></i>Share on Facebook
                                        </a>
                                    </div>
                                </div>
                                <div className="btn-group" role="group" data-toggle="tooltip" data-placement="top" title="More">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                        <a className="dropdown-item" href="#">
                                            <i className="fa-solid fa-flag mr-2"></i> Report
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sm-ml-2'>
                        <div className='creator-title'>
                            <h1 className='card__author--verified'>Bored Ape Yacht Club</h1>
                        </div>
                        <div className='created-by'>
                            Created by &nbsp;<span>BoredApeYachtClub</span>
                        </div>
                        <div className='creator-description'>
                            <span>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.</span>
                        </div>
                        <div className='creator-boxes'>
                            <div className='creator-box'>
                                <span className='creator-value'>10.0K</span>
                                <span className='creator-details'>Item</span>
                            </div>
                            <div className='creator-box'>
                                <span className='creator-value'>6.4K</span>
                                <span className='creator-details'>owners</span>
                            </div>
                            <div className='creator-box'>
                                <span className='creator-value'>$361.5</span>
                                <span className='creator-details'>floor price</span>
                            </div>
                            <div className='creator-box'>
                                <span className='creator-value'>$1.2B</span>
                                <span className='creator-details'>volume traded</span>
                            </div>
                        </div>

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
                                        <label className="filter__label">Keyword:</label>
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
        </>
    )
}
export default CreatorItems