import React, {useEffect} from "react";

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12 text-center">
                        <div className="main__title main__title--page justify-content-center">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="accordion" id="accordionExample2">
                            <div className="card">
                                <div className="card-head" id="headeOne">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapsOne" aria-expanded="false" aria-controls="collapsOne">
                                        01. How do you start using Hyperflair?
                                    </h2>
                                </div>
                                <div id="collapsOne" className="collapse" aria-labelledby="headeOne" data-parent="#accordionExample2">
                                    <div className="card-body">
                                        To begin using Hyperflair, you will need to download and setup a crypto wallet. We reccomend using the metamask wallet on a desktop browser to begin. You will then need to purchase BNB from a centralized exchange and send it your metamask wallet. From here you will go to PancakeSwap and purchase <b>FLAIR</b> tokens if you wish to bid on NFTS that require <b>FLAIR</b>. Be sure to have extra BNB to cover gas fees and minting fees once you have set up your Hyperflair profile.
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-head" id="headeTwo">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapsTwo" aria-expanded="false" aria-controls="collapsTwo">
                                        02. How much is the minting fee?
                                    </h2>
                                </div>
                                <div id="collapsTwo" className="collapse" aria-labelledby="headeTwo" data-parent="#accordionExample2">
                                    <div className="card-body">
                                        The cost to mint NFTs on Hyperflair is currently 0.00 BNB. This does not include the gas fee of the Binance network, so be sure to have extra so you can cover the full cost.
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-head" id="headeThree">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapsThree" aria-expanded="false" aria-controls="collapsThree">
                                        03. What are royalties?
                                    </h2>
                                </div>
                                <div id="collapsThree" className="collapse" aria-labelledby="headeThree" data-parent="#accordionExample2">
                                    <div className="card-body">
                                        When you mint a NFT, you will be asked what percent royalties to include. For example, if you chose 5%, you will receive 5% from every future sale of the item.
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-head" id="headeFour">
                                    <h2 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapsFour" aria-expanded="false" aria-controls="collapsFour">
                                        04. When and how do you receive payment?
                                    </h2>
                                </div>
                                <div id="collapsFour" className="collapse" aria-labelledby="headeFour" data-parent="#accordionExample2">
                                    <div className="card-body">
                                        You will receive the payment once the collector has finalized the payment. If you are hosting an auction, you will receive payment once the reserve is met and the auction is over.
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
export default Faq