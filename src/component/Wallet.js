import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { connectors } from "./connectors";
import toastr from "toastr";
import { useWeb3React } from "@web3-react/core";

const Wallet = () => {
  const { connector, library, chainId, account, activate, deactivate, active } =
    useWeb3React();

  const [age, setAge] = useState(false);
  const [terms, setTerms] = useState(false);

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  useEffect(() => {
    const type = window.localStorage.getItem("provider");
    if (type) {
      activate(connectors[type]);
    }
  }, [activate, active, library, connector]);

  const handleConnect = () => {
    try {
      let type = window.localStorage.getItem("provider");
      if (age === true && terms === true) {
        if (type !== undefined && type !== "") {
          activate(connectors[type]);
        } else {
          disconnect();
        }
        handleClose();
      } else {
        toastr.error("Check the both cheakcbox");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAge = (e) => setAge(e.target.checked);
  const handleTerms = (e) => setTerms(e.target.checked);

  return (
    <>
      <div className="container">
        <div className="row row--grid">
          <div className="col-8 mx-auto">
            <div className="main__title main__title--page mb-3">
              <h1>Connect your wallet.</h1>
              <p className="mt-0">
                Connect with one of our available wallet providers or create a
                new one.
              </p>
            </div>

            <div className="row row--grid">
              <div className="col-12 col-sm-6 col-lg-4">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setProvider("injected");
                    handleShow();
                  }}
                >
                  <div className="wallet__item">
                    <div className="wallet__item-fix">
                      <span className="wallet__popular">Popular</span>
                      <div className="wallet__item-inner text-center">
                        <div className="wallet__icon mb-20">
                          <img
                            src={process.env.PUBLIC_URL + "/fox.svg"}
                            alt="Metamask Wallet"
                          />
                        </div>
                        <div className="wallet__content">
                          <h3 className="wallet__title">Metamask</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                <div className="wallet__item">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setProvider("bscwallet");
                      handleShow();
                    }}
                  >
                    <div className="wallet__item-fix">
                      <div className="wallet__item-inner text-center">
                        <div className="wallet__icon mb-20">
                          <img
                            src={process.env.PUBLIC_URL + "/binance-wallet.svg"}
                            alt="Binance Wallet"
                          />
                        </div>
                        <div className="wallet__content">
                          <h3 className="wallet__title">Binance Wallet</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                <div className="wallet__item">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setProvider("walletConnect");
                      handleShow();
                    }}
                  >
                    <div className="wallet__item-fix">
                      <div className="wallet__item-inner text-center">
                        <div className="wallet__icon mb-20">
                          <img
                            src={process.env.PUBLIC_URL + "/wallet-connect.svg"}
                            alt="Wallet Connect"
                          />
                        </div>
                        <div className="wallet__content">
                          <h3 className="wallet__title">WalletConnect</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="text-body mb-4">Hyperflair Terms of Service</h4>
            <p>
              Please take a few minutes to read and understand{" "}
              <Link to={`${process.env.PUBLIC_URL}/terms`}>
                Hyperflair Terms of Service.
              </Link>{" "}
              To continue, you'll need to accept the Terms of Service by
              checking the box.
            </p>
            <ul className="filter__checkboxes">
              <li>
                <input
                  id="type5"
                  type="checkbox"
                  name="type5"
                  defaultChecked=""
                  onChange={handleAge}
                />
                <label htmlFor="type5" className="text-black-50">
                  I am at least 13 years old
                </label>
              </li>
              <li>
                <input
                  id="type6"
                  type="checkbox"
                  name="type6"
                  onChange={handleTerms}
                />
                <label htmlFor="type6" className="text-black-50">
                  I accept the Hyperflair Terms of Service
                </label>
              </li>
            </ul>
            <button type="button" className="sign__btn" onClick={handleConnect}>
              Proceed
            </button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default Wallet;
