import LiveAuctionSlider from './Slider/LiveAuctionSlider';

export default function LiveAuctions() {
    return (
        <>
            <div className="container">
                <section className="row row--grid">
                    <div className="col-12">
                        <div className="main__title">
                            <h2>Auctions now live <img src={require('../assets/img/hot.png')} alt="" className='ml-2' /></h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="main__carousel-wrap">
                            <LiveAuctionSlider />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}