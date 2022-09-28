import React, {useEffect} from 'react';
import CreatorCollection from './CreatorCollection';
import Explore from './Explore';
import HotBid from './HotBid';
import LiveAuctions from './LiveAuctions';
import BannerSlider from './Slider/BannerSlider';
import TopBuyerSeller from './TopBuyerSeller';
import TopCollection from './TopCollection';
import TopCreators from './TopCreators';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
            
                <div className="home home--hero">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className=''>
                                    <BannerSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HotBid />
                <LiveAuctions />
                <TopBuyerSeller />
                <TopCreators />
                <TopCollection />
                <CreatorCollection />
                <Explore />
            
        </>
    )
}
export default Home