import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import FirestoreEx from './pages/FirestoreEx';
import MapView from './pages/MapView';
import PlacesEx from './pages/PlacesEx';
import StylingEx from './pages/StylingEx';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Load the example dataset from local file.
const seedRatingsData = require('./ratingsData.json');

const App = () => {
  const [ratingsData, setRatingsData] = useState(seedRatingsData);
  const [currentPlace, setCurrentPlace] = useState({});

  // useLocation allows the application to keep track of its current location.
  // in this case it provides the necessary information for framer-motion to
  // animate on a per route (page-by-page) basis.
  // Note: for useLocation to function correctly the Router must be defined in
  // a higher level component (in this case index.js).
  const location = useLocation();

  const handleCurrentPlace = (addressObject) => {
    setCurrentPlace(addressObject);
  };

  return (
    <>
      <Header
        currentPlace={currentPlace}
        handleCurrentPlace={handleCurrentPlace}
      />
      <main className="container">
        {/* The exitBeforeEnter prop prevents loading a new page before the last
        page has fully exited. */}
        <AnimatePresence exitBeforeEnter>
          {/* Location object and key added to the Routes component by means
          of the useLocation() hook. */}
          <Routes location={location} key={location.key}>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/map"
              exact
              element={<MapView ratingsData={ratingsData} />}
            />
            <Route
              path="/places"
              exact
              element={<PlacesEx onChange={() => null} />}
            />
            <Route path="/terms" exact element={<TermsOfService />} />
            <Route path="/privacy" exact element={<PrivacyPolicy />} />
            <Route path="/firestore" exact element={<FirestoreEx />} />
            <Route path="/styling" exact element={<StylingEx />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default App;
