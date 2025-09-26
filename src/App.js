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
import MissionVision from "./Pages/About/MissionVision";
import OurStory from "./Pages/About/OurStory";
import Team from "./Pages/About/Team";
import Register from "./Pages/User/Register";
import Login from "./Pages/User/Login";
// import Contact from "./Pages/Contact";
// import NotFound from "./Pages/NotFound";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home />} />
   
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/mission" element={<MissionVision />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
    </Routes>
    </>
  );
};  
export default App;