import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";

import Acceptable from "./component/Acceptable";
import Activity from "./component/Activity";
import Contacts from "./component/Contacts";
import Cookie from "./component/Cookie";
import CreateItem from "./component/CreateItem";
import CreatorItems from "./component/CreatorItems";
import EditProfile from "./component/EditProfile";
import ExploreAll from "./component/ExploreAll";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import ItemDetails from "./component/ItemDetails";
import Privacy from "./component/Privacy";
import Rankings from "./component/Rankings";
import Terms from "./component/Terms";
import ViewProfile from "./component/ViewProfile";
import Wallet from "./component/Wallet";
import { Web3Provider } from "@ethersproject/providers";
import { connectors } from "./component/connectors";
import { rpc_url } from "./component/constants";
import MyCollection from "./component/MyCollection";
import CreateCollection from './component/CreateCollection'
function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  const basepath = process.env.PUBLIC_URL;
  return (
    <>
      <div className="page-wrapper">
        <Web3ReactProvider getLibrary={getLibrary}>
          <BrowserRouter>
            <Header />
            <main className="main">
              <Routes basename={"/nft"}>
                <Route path={`${basepath}/`} element={<Home />} />
                <Route
                  path={`${basepath}/creator-collections`}
                  element={<CreatorItems />}
                />
                <Route
                  path={`${basepath}/item-details`}
                  element={<ItemDetails />}
                />
                <Route
                  path={`${basepath}/create-item`}
                  element={<CreateItem />}
                />
                <Route path={`${basepath}/account`} element={<ViewProfile />} />
                <Route
                  path={`${basepath}/edit-profile`}
                  element={<EditProfile />}
                />
                <Route path={`${basepath}/activity`} element={<Activity />} />
                <Route path={`${basepath}/rankings`} element={<Rankings />} />
                <Route path={`${basepath}/faqs`} element={<Faq />} />
                <Route path={`${basepath}/contact`} element={<Contacts />} />
                <Route path={`${basepath}/privacy`} element={<Privacy />} />
                <Route path={`${basepath}/terms`} element={<Terms />} />
                <Route path={`${basepath}/cookie`} element={<Cookie />} />
                <Route path={`${basepath}/myCollections`} element={<MyCollection />} />
                <Route path={`${basepath}/create-collection`} element={<CreateCollection />} />
                <Route
                  path={`${basepath}/acceptable`}
                  element={<Acceptable />}
                />
                <Route path={`${basepath}/wallet`} element={<Wallet />} />
                <Route
                  path={`${basepath}/explore-all`}
                  element={<ExploreAll />}
                />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </Web3ReactProvider>
      </div>
    </>
  );
}

export default App;
