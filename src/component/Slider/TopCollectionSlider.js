import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const TopCollectionSlider = () => {
    const TopCollectionslider = {
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
                items: 5
            }
        },
    };
    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <OwlCarousel className='hot__bid__slider owl-theme'  {...TopCollectionslider} >
                        <div className='item'>
                            <div className="collection">
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__cover collection__bg" style={{ backgroundImage: `url(${require("../../assets/img/bg/bg-small.png")})` }}></Link>
                                <div className="collection__meta">
                                    <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__avatar collection__avatar--verified">
                                        <img src={require('../../assets/img/avatars/avatar3.jpg')} alt="" />
                                    </Link>
                                    <h3 className="collection__name">
                                        <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>Hashmasks</Link>
                                    </h3>
                                    <span className="collection__number">ERC-721</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="collection">
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__cover collection__bg"  style={{ backgroundImage: `url(${require("../../assets/img/bg/bg-small2.png")})` }}></Link>
                                <div className="collection__meta">
                                    <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__avatar collection__avatar--verified">
                                        <img src={require('../../assets/img/avatars/avatar4.jpg')} alt="" />
                                    </Link>
                                    <h3 className="collection__name">
                                        <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>Hashmasks</Link>
                                    </h3>
                                    <span className="collection__number">ERC-721</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="collection">
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__cover collection__bg"  style={{ backgroundImage: `url(${require("../../assets/img/bg/bg-small3.png")})` }}></Link>
                                <div className="collection__meta">
                                    <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__avatar collection__avatar--verified">
                                        <img src={require('../../assets/img/avatars/avatar5.jpg')} alt="" />
                                    </Link>
                                    <h3 className="collection__name">
                                        <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>Hashmasks</Link>
                                    </h3>
                                    <span className="collection__number">ERC-721</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="collection">
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__cover collection__bg"  style={{ backgroundImage: `url(${require("../../assets/img/bg/bg-small4.png")})` }}></Link>
                                <div className="collection__meta">
                                    <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__avatar collection__avatar--verified">
                                        <img src={require('../../assets/img/avatars/avatar6.jpg')} alt="" />
                                    </Link>
                                    <h3 className="collection__name">
                                        <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>Hashmasks</Link>
                                    </h3>
                                    <span className="collection__number">ERC-721</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="collection">
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__cover collection__bg" style={{ backgroundImage: `url(${require("../../assets/img/bg/bg-small5.png")})` }}></Link>
                                <div className="collection__meta">
                                    <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__avatar collection__avatar--verified">
                                        <img src={require('../../assets/img/avatars/avatar7.jpg')} alt="" />
                                    </Link>
                                    <h3 className="collection__name">
                                        <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>Hashmasks</Link>
                                    </h3>
                                    <span className="collection__number">ERC-721</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="collection">
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__cover collection__bg"  style={{ backgroundImage: `url(${require("../../assets/img/bg/bg-small6.png")})` }}></Link>
                                <div className="collection__meta">
                                    <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="collection__avatar collection__avatar--verified">
                                        <img src={require('../../assets/img/avatars/avatar7.jpg')} alt="" />
                                    </Link>
                                    <h3 className="collection__name">
                                        <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>Hashmasks</Link>
                                    </h3>
                                    <span className="collection__number">ERC-721</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default TopCollectionSlider