import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './theme/GlobalStyle';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import FirestoreEx from './pages/FirestoreEx';
import MapView from './pages/MapView';
import Footer from './components/layout/Footer';
import PlacesEx from './pages/PlacesEx';

// Load the example dataset from local file.
const seedVenueData = require('./venueData.json');

function App() {
  const [venueData, setVenueData] = useState(seedVenueData);

  // useLocation allows the application to keep track of its current location.
  // in this case it provides the necessary information for framer-motion to
  // animate on a per route (page-by-page) basis.
  // Note: for useLocation to function correctly the Router must be defined in
  // a higher level component (in this case index.js).
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main className="container">
        {/* The exitBeforeEnter prop prevents loading a new page before the last
        page has fully exited. */}
        <AnimatePresence exitBeforeEnter>
          {/* Location object and key added to the Routes component by means
          of the useLocation() hook. */}
          <Routes location={location} key={location.key}>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/mapview"
              exact
              element={<MapView venueData={venueData} />}
            />
            <Route
              path="/places"
              exact
              element={<PlacesEx onChange={() => null} />}
            />
            <Route path="/firestore" exact element={<FirestoreEx />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
