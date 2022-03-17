import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import FirestoreEx from './pages/FirestoreEx';
import MapView from './pages/MapView';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/mapview" exact element={<MapView />} />
        <Route path="/firestore" exact element={<FirestoreEx />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
