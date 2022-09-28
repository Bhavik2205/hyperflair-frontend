import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import eth from '../../assets/img/eth.svg';

const HotBidSlider = () => {
    const Bidslider = {
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1024: {
                items: 4
            }
        },
    };


    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <OwlCarousel className='hot__bid__slider owl-theme'  {...Bidslider} >
                        <div className="item">
                            <div className="card">
                                <div className='card__header'>
                                    <div className='user__icon_group'>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar5.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar.jpg')} alt="" />
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
                                    <img src={require('../../assets/img/cover/cover1.jpg')} alt="" />
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
                        <div className="item">
                            <div className="card">
                                <div className='card__header'>
                                    <div className='user__icon_group'>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar5.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar.jpg')} alt="" />
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
                                    <img src={require('../../assets/img/cover/cover2.jpg')} alt="" />
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
                        <div className="item">
                            <div className="card">
                                <div className='card__header'>
                                    <div className='user__icon_group'>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar5.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar.jpg')} alt="" />
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
                                    <img src={require('../../assets/img/cover/cover3.jpg')} alt="" />
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
                        <div className="item">
                            <div className="card">
                                <div className='card__header'>
                                    <div className='user__icon_group'>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar5.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar.jpg')} alt="" />
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
                                    <img src={require('../../assets/img/cover/cover4.jpg')} alt="" />
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
                        <div className="item">
                            <div className="card">
                                <div className='card__header'>
                                    <div className='user__icon_group'>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar5.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className='user-hover'>
                                            <div className='user__icon'>
                                                <img src={require('../../assets/img/avatars/avatar.jpg')} alt="" />
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
                                    <img src={require('../../assets/img/cover/cover5.jpg')} alt="" />
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
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default HotBidSlider