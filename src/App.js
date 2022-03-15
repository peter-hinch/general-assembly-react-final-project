import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import FirestoreEx from './pages/FirestoreEx';
import MapsEx from './pages/MapsEx';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/maps" exact element={<MapsEx />} />
          <Route path="/firestore" exact element={<FirestoreEx />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
