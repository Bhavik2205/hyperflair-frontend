import './css/app.css'

import Modal from 'react-bootstrap/Modal';
import React from 'react'

export default function Sell(props) {
    

    return (
        <>
        <Modal show={props.show} onHide={props.hide}>
        <div class="popup-wrapper align-items-center justify-content-center">
        <div class="container d-flex align-items-center justify-content-center">
          <div class="popup-box">
            <div class="close-btn d-flex align-items-center justify-content-center" onClick={props.hide}>
              <lord-icon src="https://cdn.lordicon.com/mecwbjnp.json" trigger="hover"
                colors="primary:#11998e,secondary:#000" style={{width:"100%",height:"100%"}}>
              </lord-icon>
            </div>
            <div class="text-center">
              <lord-icon src="https://cdn.lordicon.com/dnoiydox.json" trigger="loop" delay="500"
                colors="primary:#27ca84,secondary:#11998e" style={{width:"250px",height:"250px"}}>
              </lord-icon>
            </div>
  
            <div class="text-center mt-5">
              <h1 class="text-dark fw-bold">Sell NFT</h1>
            </div>
  
            <div class="fm-controll-text">
              <input type="number" name=""  placeholder="0.00" required value={props.value} onChange={props.onChange}/>
            </div>
  
          
            <div class="mt-5">
              <button type="button" name="button" class="btn btn-primary w-100" onClick={()=>props.sellNFTToken(true)}>Sell NFT</button>
            </div>
          </div>
        </div>
      </div> 
      </Modal> 
        </>
    )
}
