import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import FirestoreEx from './pages/FirestoreEx';
import MapView from './pages/MapView';
import Footer from './components/layout/Footer';
import PlacesEx from './pages/PlacesEx';

function App() {
  // Note: for useLocation to function correctly the Router must be defined in
  // a higher level component (in this case index.js).
  const location = useLocation();

  return (
    <>
      <NavBar />
      <main className="container">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" exact element={<Home />} />
            <Route path="/mapview" exact element={<MapView />} />
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
