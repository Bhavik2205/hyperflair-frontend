import React, { useState } from 'react';
import Select from 'react-select';
import TopCollectionSlider from './Slider/TopCollectionSlider';

const TopCollection = () => {
    const optioncollection = [
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
                                    <h2>Best performers in</h2>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className="main__filter-wrap">
                                        <Select defaultValue={{ label: "1 day", value: 0 }} styles={styles} onChange={setSelectedOption} options={optioncollection} isSearchable={false} isFocused={false} className="cust-select" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="main__carousel-wrap">
                            <TopCollectionSlider />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default TopCollection