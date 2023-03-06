import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
// import ToggleButton from './components/ToggleButton/ToggleButton';
import UnsplashAPI from './components/UnsplashAPI/UnsplashAPI';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Explore from './components/Explore/Explore'
// import AppFinal from './components/AppFinal/AppFinal'

export default function App() {
   const [photos, setPhotos] = useState([]);

   const searchPhotos = async (query) => {
     const clientId = "-UC_-0Tp826OaxEA-8Jk1wrKc04W_BW8d0kXDJ7DmkA";
     const response = await fetch(
       `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`
     );
     const data = await response.json();

     setPhotos(data.results);
     console.log("photos ", photos)
   };
   
  return (
    // <Router  className="App">
    //   <Routes>
    //     <Route exact path="/" element={[
    //       <Header />,
    //       <Hero searchPhotos={searchPhotos} />,
    //       <UnsplashAPI photos={photos} />
    //     ]}></Route>
    //     <Route exact path="/explore" element={[
    //       <Header />,
    //       <Explore/>
    //     ]}></Route>
    //   </Routes>
    // </Router  >
    <div className="App">
      <Header />
      <Hero searchPhotos={searchPhotos} />
      <UnsplashAPI photos={photos} /> 
    </div>
  );
}
