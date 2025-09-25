import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
// import Jobs from "./Pages/Jobs";
// import PostJob from "./Pages/PostJob";
// import JobCategory from "./Pages/JobCategory";
// import Gigs from "./Pages/Gigs";
// import OfferGig from "./Pages/OfferGig";
// import PopularGigs from "./Pages/PopularGigs";
// import Companies from "./Pages/Companies";
// import CompanyProfile from "./Pages/CompanyProfile";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import NotFound from "./Pages/NotFound";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home />} />

    </Routes>
    </>
  );
};  
export default App;