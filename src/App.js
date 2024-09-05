import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Certificates from './components/Certificate/Certificate';
import Contact from './components/Contact/Contact';
import Playlist from './components/Projects/Playlist';
import Footer from './components/Footer/Footer';
import { Routes, Route, } from "react-router-dom";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/playlist' element={<Playlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
