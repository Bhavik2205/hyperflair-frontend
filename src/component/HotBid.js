import HotBidSlider from './Slider/HotBidSlider';

export default function HotBid() {
    return (
        <>
            <div className="container">
                <section className="row row--grid">
                    <div className="col-12">
                        <div className="main__title">
                            <h2>Latest bids <img src={require('../assets/img/hot.png')} alt="" className='ml-2' /></h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="main__carousel-wrap">
                            <HotBidSlider />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}