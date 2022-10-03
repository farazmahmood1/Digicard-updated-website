import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Body/Footer';
import Navbar from './Components/Body/Navbar';
import Home from './Components/Content/Home';
import UpdateProfile from './Components/Content/UpdateProfile';
import WorkVideo from './Components/Content/WorkVideo';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UpdateProfile' element={< UpdateProfile />} />
          <Route path='/WorkVideo' element={< WorkVideo />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
