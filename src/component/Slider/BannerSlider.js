import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import React, { useRef, useEffect } from "react";

import OwlCarousel from 'react-owl-carousel';
import srcone from '../../assets/video/video-1.mp4';
import srctwo from '../../assets/video/video-2.mp4';
import srcthree from '../../assets/video/video-3.mp4';

const BannerSlider = ({src, isMuted}) => {
    const slider1 = {
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1024: {
                items: 1,
            }
        },
    };
    const slider2 = {
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
            767: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1024: {
                items: 5,
            }
        },
    };
    const refVideo = useRef(null);
    const refVideo1 = useRef(null);
    const refVideo2 = useRef(null);

    var src1 = srcone;
    var src2 = srctwo;
    var src3 = srcthree;
    
    useEffect(() => {
        if (!refVideo.current) {
            return;
        }
        if (isMuted) {
            refVideo.current.defaultMuted = true;
            refVideo.current.muted = true;
        }
        refVideo.current.src = src1;
    }, [src]);

    useEffect(() => {
        if (!refVideo1.current) {
            return;
        }
        if (isMuted) {
            refVideo1.current.defaultMuted = true;
            refVideo1.current.muted = true;
        }
        refVideo1.current.src = src2;
    }, [src]);
    
    useEffect(() => {
        if (!refVideo2.current) {
            return;
        }
        if (isMuted) {
            refVideo2.current.defaultMuted = true;
            refVideo2.current.muted = true;
        }
        refVideo2.current.src = src3;
    }, [src]);
    return (
        <>
            <div className="row">
                {/* <div className="col-sm-12 col-md-4 col-lg-4">
                    <OwlCarousel className='hero owl-theme' margin={10} {...slider1} >
                        <div className="item">
                            <div className="slide-img-group">
                                <div className="slide-img">
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-areas">
                                        <video className="slider-img" playsInline={true} loop controls={false} autoPlay={true} muted="muted" ref={refVideo}></video>
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slide-img-group">
                                <div className="slide-img">
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-areas">
                                        <video className="slider-img" playsInline={true} loop controls={false} autoPlay={true} muted="muted" ref={refVideo1}></video>
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slide-img-group">
                                <div className="slide-img">
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-areas">
                                        <video className="slider-img" playsInline={true} loop controls={false} autoPlay={true} muted="muted" ref={refVideo2}></video>
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div> */}
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <OwlCarousel className='hero banner-slider-two owl-theme' margin={20} {...slider2} >
                        <div className="item">
                            <div className="slide-img-group">
                                <div className="slide-img">
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover1.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover2.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slide-img-group">
                                <div className="slide-img">
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover3.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover4.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slide-img-group">
                                <div className="slide-img">
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover5.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover6.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slide-img-group">
                                <div className="slide-img">
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover7.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                    <a href="#" className="slide-img-link">
                                        <div className="slide-img-area">
                                            <img src={require('../../assets/img/cover/cover8.jpg')} className="slider-img" alt="" />
                                            <span className="slider-title">VERSES Gallery</span>
                                            <span className="slider-subtitle">NFT LA on Spatial.io</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default BannerSlider