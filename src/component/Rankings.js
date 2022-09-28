import React from 'react'
import Select from 'react-select'
import { columns, data } from "./table-data/ranking-data";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from 'react-data-table-component'
// import "react-data-table-component-extensions/dist/index.css";
const Rankings = () => {
    const options = [
        { value: 'Last 7 Days', label: 'Last 7 Days' },
        { value: 'Last 30 Days', label: 'Last 30 Days' },
        { value: 'Last 24 hours', label: 'Last 24 hours' },
        { value: 'All Time', label: 'All Time' }
    ]
    const categories = [
        { value: 'All categories', label: 'All categories' },
        { value: 'New', label: 'New' },
        { value: 'Art', label: 'Art' },
        { value: 'Collectibles', label: 'Collectibles' },
        { value: 'Domain Names', label: 'Domain Names' },
        { value: 'Music', label: 'Music' },
        { value: 'Photography', label: 'Photography' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Trading Cards', label: 'Trading Cards' },
        { value: 'Utility', label: 'Utility' },
        { value: 'Virtual Worlds', label: 'Virtual Worlds' }
    ]
    const tableData = {
        columns,
        data
    };
    const customStyles = {
        headCells: {
            style: {
                fontWeight: '700',
                fontSize: '16px'
            },
        },
        rows: {
            style: {
                paddingTop: '10px',
                paddingBottom: '10px',
            },
        },
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main__title main__title--page">
                            <h1 className="mb-0">Top NFTs</h1>
                            <p className="mt-0">The top NFTs on Hyperflair, ranked by volume, floor price and other statistics.</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="main__filter">
                            <form action="#" className="main__filter-search">
                                <input type="text" placeholder="Search..." />
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                            </form>

                            <div className="main__filter-wrap">
                                <div className='col-6 col-lg-4'>
                                    <Select options={options} defaultValue={{ label: "Last 7 Days", value: 0 }} />
                                </div>
                                <div className='col-6 col-lg-4'>
                                    <Select options={categories} defaultValue={{ label: "All categories", value: 0 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-3'>
                        <DataTableExtensions {...tableData} print={false} export={false} filter={false}>
                            <DataTable
                                columns={columns}
                                data={data}
                                defaultSortField="id"
                                defaultSortAsc={false}
                                pagination
                                highlightOnHover
                                customStyles={customStyles}
                            />
                        </DataTableExtensions>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rankings