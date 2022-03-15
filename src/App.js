import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import FirestoreEx from './pages/FirestoreEx';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/page1" exact element={<>Page 1</>} />
          <Route path="/firestore" exact element={<FirestoreEx />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
