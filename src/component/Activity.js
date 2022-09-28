import React, {useEffect} from "react";
import { Link } from 'react-router-dom'


const Activity = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12">
                        <div className="main__title main__title--page">
                            <h1>Activity</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-tabs main__tabs" id="main__tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">All</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Following</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">My activity</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">My Bids</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row row--grid">
                    <div className="col-12 col-xl-3 order-xl-2">
                    <div className="filter-wrap filter--sticky">
						<button className="filter-wrap__btn" type="button" data-toggle="collapse" data-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">Open filter</button>

						<div className="collapse filter-wrap__content" id="collapseFilter">
							
							<div className="filter">
								<h4 className="filter__title">Filters <button type="button">Clear all</button></h4>

								<div className="filter__group">
									<ul className="filter__checkboxes">
										<li>
											<input id="type5" type="checkbox" name="type5" />
											<label htmlFor="type5">Listings</label>
										</li>
										<li>
											<input id="type6" type="checkbox" name="type6" />
											<label htmlFor="type6">Purchases</label>
										</li>
										<li>
											<input id="type7" type="checkbox" name="type7" />
											<label htmlFor="type7">Sales</label>
										</li>
										<li>
											<input id="type8" type="checkbox" name="type8" />
											<label htmlFor="type8">Transfers</label>
										</li>
										<li>
											<input id="type9" type="checkbox" name="type9" />
											<label htmlFor="type9">Bids</label>
										</li>
										<li>
											<input id="type10" type="checkbox" name="type10" />
											<label htmlFor="type10">Likes</label>
										</li>
										<li>
											<input id="type11" type="checkbox" name="type11" />
											<label htmlFor="type11">Followings</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
                    </div>
                    <div className="col-12 col-xl-9 order-xl-1">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link></h3>
                                        <p className="activity__text">listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@Nickname</Link> for <b>0.049 ETH</b></p>
                                        <span className="activity__time">4 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>To Infinity And Beyond</Link></h3>
                                        <p className="activity__text">9 editions listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@neo</Link> for <b>0.085 ETH</b></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Flowers in Concrete</Link></h3>
                                        <p className="activity__text">purchased by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.085 ETH</b> from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@min1max</Link></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover4.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Industrial Revolution</Link></h3>
                                        <p className="activity__text">transferred from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@midinh</Link> to <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">23 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover5.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tranquility</Link></h3>
                                        <p className="activity__text"><Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@aaarthur</Link> offered <b>0.002 BNB</b></p>
                                        <span className="activity__time">40 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover6.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tetradecapus</Link></h3>
                                        <p className="activity__text">liked by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">45 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover7.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Elegance</Link></h3>
                                        <p className="activity__text">started following <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">48 minutes ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link></h3>
                                        <p className="activity__text">listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@Nickname</Link> for <b>0.049 ETH</b></p>
                                        <span className="activity__time">4 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>To Infinity And Beyond</Link></h3>
                                        <p className="activity__text">9 editions listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@neo</Link> for <b>0.085 ETH</b></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Flowers in Concrete</Link></h3>
                                        <p className="activity__text">purchased by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.085 ETH</b> from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@min1max</Link></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover4.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Industrial Revolution</Link></h3>
                                        <p className="activity__text">transferred from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@midinh</Link> to <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">23 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover5.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tranquility</Link></h3>
                                        <p className="activity__text"><Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@aaarthur</Link> offered <b>0.002 BNB</b></p>
                                        <span className="activity__time">40 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover6.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tetradecapus</Link></h3>
                                        <p className="activity__text">liked by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">45 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover7.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Elegance</Link></h3>
                                        <p className="activity__text">started following <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">48 minutes ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-3" role="tabpanel">
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link></h3>
                                        <p className="activity__text">listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@Nickname</Link> for <b>0.049 ETH</b></p>
                                        <span className="activity__time">4 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>To Infinity And Beyond</Link></h3>
                                        <p className="activity__text">9 editions listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@neo</Link> for <b>0.085 ETH</b></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Flowers in Concrete</Link></h3>
                                        <p className="activity__text">purchased by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.085 ETH</b> from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@min1max</Link></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover4.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Industrial Revolution</Link></h3>
                                        <p className="activity__text">transferred from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@midinh</Link> to <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">23 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover5.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tranquility</Link></h3>
                                        <p className="activity__text"><Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@aaarthur</Link> offered <b>0.002 BNB</b></p>
                                        <span className="activity__time">40 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover6.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tetradecapus</Link></h3>
                                        <p className="activity__text">liked by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">45 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover7.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Elegance</Link></h3>
                                        <p className="activity__text">started following <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">48 minutes ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-4" role="tabpanel">
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover1.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Walking on Air</Link></h3>
                                        <p className="activity__text">listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@Nickname</Link> for <b>0.049 ETH</b></p>
                                        <span className="activity__time">4 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover2.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>To Infinity And Beyond</Link></h3>
                                        <p className="activity__text">9 editions listed by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@neo</Link> for <b>0.085 ETH</b></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover3.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Flowers in Concrete</Link></h3>
                                        <p className="activity__text">purchased by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.085 ETH</b> from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@min1max</Link></p>
                                        <span className="activity__time">21 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover4.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Industrial Revolution</Link></h3>
                                        <p className="activity__text">transferred from <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@midinh</Link> to <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">23 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover5.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tranquility</Link></h3>
                                        <p className="activity__text"><Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@aaarthur</Link> offered <b>0.002 BNB</b></p>
                                        <span className="activity__time">40 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover6.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Tetradecapus</Link></h3>
                                        <p className="activity__text">liked by <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">45 minutes ago</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <Link to={`${process.env.PUBLIC_URL}/item-details`} className="activity__cover">
                                        <img src={require('../assets/img/cover/cover7.jpg')} alt="" />
                                    </Link>
                                    <div className="activity__content">
                                        <h3 className="activity__title"><Link to={`${process.env.PUBLIC_URL}/item-details`}>Elegance</Link></h3>
                                        <p className="activity__text">started following <Link to={`${process.env.PUBLIC_URL}/creator-collections`}>@johndoe</Link></p>
                                        <span className="activity__time">48 minutes ago</span>
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
export default Activity