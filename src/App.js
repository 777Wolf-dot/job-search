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
import Profile from "./Pages/User/Profile";
import Jobs from "./Pages/Jobs/Jobs";
import PostJob from "./Pages/Jobs/PostJob";
// import Contact from "./Pages/Contact";
// import NotFound from "./Pages/NotFound";
import  EmployerDashboard from "./Pages/User/EmployerDashboard";
import EmployeeDashboard from "./Pages/User/EmployeeDashboard";
import Dashboard from "./Pages/User/Dashboard";
import FindGigs from "./Pages/Gigs/FindGigs";
import PostGig from "./Pages/Gigs/PostGig";


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
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/user/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/jobs/jobs" element={<Jobs />} />
        <Route path="/jobs/post-job" element={<PostJob />} />
        <Route path="/gigs/find-gigs" element={<FindGigs />} />
        <Route path="/gigs/post-gig" element={<PostGig />} />
    </Routes>
    </>
  );
};  
export default App;