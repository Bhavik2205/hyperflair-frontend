import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer__logo">
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                    <img src={require('../assets/img/logo.png')} alt="" />
                                </Link>
                            </div>
                            <p className="footer__tagline">Built for the people. Flair allows you to mint, collect, auction, and sell NFT’s over the Binance network.</p>
                        </div>
                        <div className="col-md-3">
                            <h6 className="footer__title">Hyperflair</h6>
                            <div className="footer__nav">
                                <Link to={`${process.env.PUBLIC_URL}/activity`}>Activity</Link>
                                <a href="https://hyperflair.medium.com/hyperflair-flair-white-paper-81c0a09f63bd" target="_blank">About</a>
                                <Link to={`${process.env.PUBLIC_URL}/terms`}>Terms &amp; Conditions</Link>
                                <Link to={`${process.env.PUBLIC_URL}/privacy`}>Privacy Policy</Link>
                                <Link to={`${process.env.PUBLIC_URL}/cookie`}>Cookie Policy</Link>
                                <Link to={`${process.env.PUBLIC_URL}/acceptable`}>Acceptable Use Policy</Link>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="footer__title">Explore</h6>
                            <div className="footer__nav">
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>All NFTs</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Art</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Collectibles</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Domain Names</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Music</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Photography</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Sports</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Trading Cards</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Utility</Link>
                                <Link to={`${process.env.PUBLIC_URL}/explore-all`}>Virtual Worlds</Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="footer__title">Community</h6>
                            <div className="footer__nav">
                                <Link to={`${process.env.PUBLIC_URL}/faqs`}>FAQ</Link>
                                <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="footer__content">
                                <div className="footer__social">
                                    <a href="https://twitter.com/Hyperflair_" target="_blank">
                                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="#27ca84" strokeLinecap="round" strokeLinejoin="round" ><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                        <span>Twitter</span>
                                    </a>
                                    <a href="https://discordapp.com/users/955604588508110959" target="_blank">
                                        <svg viewBox="0 0 20 21" fill="none">
                                            <path d="M8.55233 9.54541C8.09633 9.54541 7.73633 9.94137 7.73633 10.4244C7.73633 10.9075 8.10433 11.3035 8.55233 11.3035C9.00833 11.3035 9.36833 10.9075 9.36833 10.4244C9.37633 9.94137 9.00833 9.54541 8.55233 9.54541ZM11.4723 9.54541C11.0163 9.54541 10.6563 9.94137 10.6563 10.4244C10.6563 10.9075 11.0243 11.3035 11.4723 11.3035C11.9283 11.3035 12.2883 10.9075 12.2883 10.4244C12.2883 9.94137 11.9283 9.54541 11.4723 9.54541Z" fill="#39D0D8" />
                                            <path d="M15.36 2.90161H4.64C3.736 2.90161 3 3.63018 3 4.53296V15.2397C3 16.1425 3.736 16.8711 4.64 16.8711H13.712L13.288 15.406L14.312 16.3484L15.28 17.2353L17 18.74V4.53296C17 3.63018 16.264 2.90161 15.36 2.90161ZM12.272 13.2441C12.272 13.2441 11.984 12.9036 11.744 12.6026C12.792 12.3096 13.192 11.6602 13.192 11.6602C12.864 11.8741 12.552 12.0245 12.272 12.1275C11.872 12.2938 11.488 12.4046 11.112 12.468C10.344 12.6105 9.64 12.5709 9.04 12.4601C8.584 12.373 8.192 12.2463 7.864 12.1195C7.68 12.0483 7.48 11.9612 7.28 11.8503C7.256 11.8345 7.232 11.8265 7.208 11.8107C7.192 11.8028 7.184 11.7949 7.176 11.7869C7.032 11.7078 6.952 11.6523 6.952 11.6523C6.952 11.6523 7.336 12.2859 8.352 12.5868C8.112 12.8877 7.816 13.2441 7.816 13.2441C6.048 13.1886 5.376 12.0404 5.376 12.0404C5.376 9.49038 6.528 7.42347 6.528 7.42347C7.68 6.5682 8.776 6.59195 8.776 6.59195L8.856 6.68699C7.416 7.09878 6.752 7.7244 6.752 7.7244C6.752 7.7244 6.928 7.62937 7.224 7.49474C8.08 7.12254 8.76 7.01959 9.04 6.99583C9.088 6.98791 9.128 6.97999 9.176 6.97999C9.664 6.91664 10.216 6.9008 10.792 6.96416C11.552 7.05127 12.368 7.27301 13.2 7.7244C13.2 7.7244 12.568 7.13046 11.208 6.71866L11.32 6.59195C11.32 6.59195 12.416 6.5682 13.568 7.42347C13.568 7.42347 14.72 9.49038 14.72 12.0404C14.72 12.0404 14.04 13.1886 12.272 13.2441Z" fill="#22B358" />
                                        </svg>
                                        <span>Discord</span>
                                    </a>
                                    <a href="https://medium.com/@hyperflair" target="_blank">
                                        <svg fill="none" xmlns="https://www.w3.org/2000/svg" className="" viewBox="0 0 50 30"><path d="M28.203 15.005c0 7.841-6.314 14.198-14.101 14.198C6.314 29.203 0 22.846 0 15.005S6.314.807 14.102.807s14.1 6.357 14.1 14.198zM43.672 15.005c0 7.38-3.156 13.367-7.05 13.367-3.895 0-7.051-5.986-7.051-13.367 0-7.381 3.156-13.367 7.05-13.367 3.894 0 7.05 5.984 7.05 13.367M50 15.005c0 6.611-1.11 11.974-2.48 11.974-1.37 0-2.48-5.361-2.48-11.974S46.152 3.03 47.52 3.03c1.37 0 2.48 5.361 2.48 11.975z" fill="currentColor"></path></svg>
                                        <span>Medium</span>
                                    </a>
                                    <a href="https://t.me/hyperflair" target="_blank">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" className="" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                                        <span>Telegram</span>
                                    </a>
                                </div>
                                <small className="footer__copyright">© Copyright 2022 <a href=" ">Hyperflair</a> All Rights Reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer