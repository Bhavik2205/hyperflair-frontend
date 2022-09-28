import React from "react";
import bnb from '../../assets/img/bnb.png'
export const columns = [
    {
      name: "Collection",
      selector: row => row.collection,
      sortable: true,
      minWidth: '280px',
    },
    {
      name: "Volume",
      selector: row => row.volume,
      sortable: true
    },
    {
      name: "24h %",
      selector: row => row.hours,
      sortable: true,
    },
    {
      name: "7d %",
      selector: row => row.days,
      sortable: true
    },
    {
        name: "Floor Price",
        selector: row => row.price,
        sortable: true
    },
    {
        name: "Owners",
        selector: row => row.owners,
        sortable: true
    },
    {
        name: "Items",
        selector: row => row.items,
        sortable: true
    }
  ];
  
  export const data = [
    {
      id: 1,
      collection: <div className="ranking-block">
        <div className="ranking-img card__author--verified">
        <img src={require('../../assets/img/avatars/avatar.jpg')}/>
        </div>
        <div className="ranking-title">
        Moonbirds
        </div>
      </div>,
      volume: "36,264.14",
      hours: <span className="text-danger">-70.16%</span>,
      days: <span className="text-danger">-29.16%</span>,
      price: "33 BNB",
      owners: "64 K",
      items: "10.5 K"
    },
    {
      id: 2,
      collection: <div className="ranking-block">
        <div className="ranking-img">
        <img src={require('../../assets/img/avatars/avatar2.jpg')}/>
        </div>
        <div className="ranking-title">
        Mutant Ape Yacht Club
        </div>
      </div>,
      volume: "46,264.14",
      hours: <span className="text-success">-70.16%</span>,
      days: <span className="text-success">-29.16%</span>,
      price: "33 BNB",
      owners: "64 K",
      items: "10.5 K"
    },
    {
      id: 3,
      collection: <div className="ranking-block">
        <div className="ranking-img">
        <img src={require('../../assets/img/avatars/avatar3.jpg')}/>
        </div>
        <div className="ranking-title">
        0xOG Pass by 0xStudio
        </div>
      </div>,
      volume: "26,264.14",
      hours: <span className="text-success">-70.16%</span>,
      days: <span className="text-success">-29.16%</span>,
      price: "33 BNB",
      owners: "64 K",
      items: "10.5 K"
    },
    {
      id: 4,
      collection: <div className="ranking-block">
        <div className="ranking-img">
        <img src={require('../../assets/img/avatars/avatar4.jpg')}/>
        </div>
        <div className="ranking-title">
        ConiunPass
        </div>
      </div>,
      volume: "26,264.14",
      hours: <span className="text-success">-70.16%</span>,
      days: <span className="text-success">-29.16%</span>,
      price: "33 BNB",
      owners: "64 K",
      items: "10.5 K"
    },
    
  ];