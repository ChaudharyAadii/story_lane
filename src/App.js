import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
// import Story from './Components/Story';
import Story from './Components/Story';
import ImageUpload from './Components/story2/ImageUpload';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
   
    <>
      <Router>
        <Header />
        <Navbar />
        {/* <Story /> */}
        {/* <Home /> */}
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/story" element={<Story />} />
            <Route path="/image" element={<Image />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
