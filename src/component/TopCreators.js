import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';


const TopCreators = () => {
    const optioncreator = [
        { value: '1 day', label: '1 day' },
        { value: '7 days', label: '7 days' },
        { value: '30 days', label: '30 days' },
    ];
    const styles = {
        control: base => ({
            ...base,
            border: 0,
            boxShadow: 'none'
        }),
        menu: base => ({
            ...base,
            fontSize: "16px",
            background: '#fff',
            hover: 'transparent'
        })
    };
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <div className="container">
                <section className="row row--grid">
                    <div className="col-12">
                        <div className="main__title">
                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <h2>Top Creators in</h2>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className="main__filter-wrap">
                                        <Select defaultValue={{ label: "1 day", value: 0 }} styles={styles} onChange={setSelectedOption} options={optioncreator} isSearchable={false} isFocused={false} className="cust-select" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12">
                        <ul className="sellers-list">
                            <li>
                                <span className="sellers-list__number">1</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar.jpg')} alt="" />
                                    <h5>@miriuuu</h5>
                                    <span>214.22 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">2</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar2.jpg')} alt="" />
                                    <h5>@sc00ty</h5>
                                    <span>205.8 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">3</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar3.jpg')} alt="" />
                                    <h5>@redalert</h5>
                                    <span>137.65 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">4</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar4.jpg')} alt="" />
                                    <h5>@1one</h5>
                                    <span>129.301 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">5</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar5.jpg')} alt="" />
                                    <h5>@kateblank</h5>
                                    <span>112.3 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">6</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar6.jpg')} alt="" />
                                    <h5>@johndoe</h5>
                                    <span>108.88 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">7</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar7.jpg')} alt="" />
                                    <h5>@nickname</h5>
                                    <span>88.58 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">8</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar8.jpg')} alt="" />
                                    <h5>@lllily</h5>
                                    <span>73.207 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">9</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar9.jpg')} alt="" />
                                    <h5>@fantraingle</h5>
                                    <span>71.076 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">10</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar10.jpg')} alt="" />
                                    <h5>@oxyoxyoxy</h5>
                                    <span>57.041 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">11</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar11.jpg')} alt="" />
                                    <h5>@vandam</h5>
                                    <span>50.261 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">12</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar12.jpg')} alt="" />
                                    <h5>@dididi</h5>
                                    <span>44.79 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">13</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar13.jpg')} alt="" />
                                    <h5>@lyzzy</h5>
                                    <span>43.24 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">14</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar14.jpg')} alt="" />
                                    <h5>@oceanu</h5>
                                    <span>41.221 ETH</span>
                                </Link>
                            </li>

                            <li>
                                <span className="sellers-list__number">15</span>
                                <Link to={`${process.env.PUBLIC_URL}/creator-collections`} className="sellers-list__author">
                                    <img src={require('../assets/img/avatars/avatar15.jpg')} alt="" />
                                    <h5>@justart</h5>
                                    <span>40.195 ETH</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
export default TopCreators