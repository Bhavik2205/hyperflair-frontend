import React, { useEffect, useState } from "react";

import ImageUploading from "react-images-uploading";
import Web3Modal from "web3modal";
import axios from "axios";
import { ethers } from "ethers";
import useHttp from "../Hooks/useHttp";

const EditProfile = () => {
  const [user, setUser] = useState([]);
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [images, setImages] = React.useState([]);
  const [cover, setCover] = React.useState([]);
  const { isLoading, error, sendRequest: fetchUser } = useHttp();
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [account, setAccount] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    wallectConnect();
    return () => {
      console.log("This will be logged on unmount");
    };
  }, [account]);
  const wallectConnect = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(connection);
    const accounts = await library.listAccounts();
    setAccount(accounts[0]);
  };
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const onChangeCover = (imageList, addUpdateIndex) => {
    console.log(imageList);
    setCover(imageList);
  };

  //----------------------------------------------------------------------------------------------------------------//

  useEffect(() => {
    const image = [];
    const coverImage = [];
    const transformItems = (itemsObj) => {
      console.log(itemsObj);
      const url = `${process.env.REACT_APP_IMG_SERVER}/images/${itemsObj.profile}`;
      const obj = {
        data_url: `${process.env.REACT_APP_IMG_SERVER}/images/${itemsObj.profile}`,
      };
      const obj2 = {
        data_url: `${process.env.REACT_APP_IMG_SERVER}/images/${itemsObj.cover}`,
      };
      image.push({ ...obj });
      coverImage.push({ ...obj2 });
      setUser(itemsObj);
      setName(itemsObj.name);
      setBio(itemsObj.bio);
      setTwitter(itemsObj.twitter);
      setInstagram(itemsObj.instagram);
      setWebsite(itemsObj.website);
      setEmail(itemsObj.email);
      setImages(image);
      setCover(coverImage);
    };

    if (account !== undefined && account !== "" && account !== null) {
      const address = {
        address: account,
      };

      fetchUser(
        {
          url: `${process.env.REACT_APP_IMG_SERVER}/createUser`,
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
          body: { address: account },
        },
        transformItems
      );
    }
  }, [account]);
  console.log(images);
  console.log(cover);
  const modifyUserImage = async (event) => {
    const data = new FormData();
    data.append("address", account);
    data.append("profile", images);
    data.append("cover", cover);
    const res = await fetch(
      `https://0251-122-170-21-242.ngrok.io/api/user/img`,
      data,
      {
        method: "PUT",
        headers: {
          //"Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
      }
    ).catch(error);
    {
      console.log(error);
    }
    console.log(res);
  };

  const modifyUser = (event) => {
    event.preventDefault();
    // const data =new FormData();
    // data.append("address",account)
    // data.append("name",name)
    // data.append("bio",bio)
    // data.append("twitter",twitter)
    // data.append("instagram",instagram)
    // data.append("website",website)

    const transformItems = (itemsObj) => {
      console.log(itemsObj);
      setUser(itemsObj);
      setName(itemsObj.name);
      setBio(itemsObj.bio);
      setTwitter(itemsObj.twitter);
      setInstagram(itemsObj.instagram);
      setWebsite(itemsObj.website);
      setEmail(itemsObj.email);
      // setImages(itemsObj.profile)
      // setCover(itemsObj.cover)
    };
    fetchUser(
      {
        url: `${process.env.REACT_APP_IMG_SERVER}/modifyUser`,
        method: "PATCH",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: {
          address: account,
          bio: bio,
          name: name,
          twitter: twitter,
          instagram: instagram,
          website: website,
          email: email,
        },
      },
      transformItems
    );
  };

  return (
    <>
      <div className="container">
        <div className="row row--grid">
          <div className="col-12 col-xl-12">
            <div className="main__title main__title--page mb-4">
              <h1>Edit profile</h1>
              <p className="mt-0 json-gray">
                You can set preferred display name, create your branded profile
                URL and manage other personal settings
              </p>
            </div>
          </div>
          <div className="col-12 col-xl-3">
            <div className="author author--page">
              <div className="author__meta">
                <ul className="nav flex-column nav-pills nav-fill w-100">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Edit Profile Image
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Personal Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="author__meta">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-5">
                      <h4 className="mb-3">Change Profile Picture</h4>
                      <div className="profile-img">
                        <ImageUploading
                          value={images}
                          onChange={onChange}
                          dataURLKey="data_url"
                          name="image"
                        >
                          {({
                            imageList,
                            onImageUpload,
                            isDragging,
                            dragProps,
                          }) => (
                            <div className="upload__image-wrapper">
                              <div
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                                className="img-wrapper"
                              >
                                Click or Drop here
                                {images.map((image, index) => (
                                  <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" />
                                  </div>
                                ))}
                                <button className="edit-profile-pic">
                                  <i className="fa-solid fa-pencil"></i>
                                </button>
                              </div>
                            </div>
                          )}
                        </ImageUploading>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                      <h4 className="mb-3">Change Cover Picture</h4>
                      <div className="profile-img">
                        <ImageUploading
                          value={cover}
                          onChange={onChangeCover}
                          dataURLKey="data_url"
                          name="cover"
                        >
                          {({
                            imageList,
                            onImageUpload,
                            isDragging,
                            dragProps,
                          }) => (
                            <div className="upload__image-wrapper">
                              <div
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                                className="img-wrapper"
                              >
                                Click or Drop here
                                {cover.map((image, index) => (
                                  <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" />
                                  </div>
                                ))}
                                <button className="edit-profile-pic">
                                  <i className="fa-solid fa-pencil"></i>
                                </button>
                              </div>
                            </div>
                          )}
                        </ImageUploading>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
                      <button className="btn-primary" onClick={modifyUserImage}>
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="author__meta">
                  <form className="sign__form sign__form--profile mt-0">
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="username">
                        Display name
                      </label>
                      <input
                        id="username"
                        type="json"
                        name="username"
                        className="sign__input"
                        placeholder="Enter your display name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="sign__group">
                      <label
                        className="sign__label required-field"
                        htmlFor="short-bio"
                      >
                        Short Bio
                      </label>
                      <jsonarea
                        id="short-bio"
                        name="short-bio"
                        className="sign__jsonarea"
                        placeholder="Tell about yourself in a few words"
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                      ></jsonarea>
                    </div>
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="json"
                        name="email"
                        className="sign__input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <h4 className="sign__title mb-2">Social Connections</h4>
                    <p className="f-12 f-500 mb-3">
                      Help collectors verify your account by connecting Social
                      Connections
                    </p>
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="twitter">
                        Twitter Link
                      </label>
                      <input
                        id="twitter"
                        type="json"
                        name="twitter"
                        className="sign__input"
                        placeholder="Enter your Twitter Link"
                        value={twitter}
                        onChange={(event) => setTwitter(event.target.value)}
                      />
                    </div>
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="instagram">
                        Instagram Link
                      </label>
                      <input
                        id="instagram"
                        type="json"
                        name="instagram"
                        className="sign__input"
                        placeholder="Enter your Instagram Link"
                        value={instagram}
                        onChange={(event) => setInstagram(event.target.value)}
                      />
                    </div>
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="sitelink">
                        Personal site or portfolio
                      </label>
                      <input
                        id="sitelink"
                        type="json"
                        name="sitelink"
                        className="sign__input"
                        placeholder="https://yoursitelink.com"
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                      />
                    </div>
                    <button className="btn-primary" onClick={modifyUser}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
