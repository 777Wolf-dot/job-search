import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown("");
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  };

  // ✅ Full detailed menu list
  const menuItems = [
    {
      name: "Home",
      emoji: "🏠",
      key: "home",
      path: "/",
      links: [],
    },
    {
      name: "Jobs",
      emoji: "💼",
      key: "jobs",
      links: [
        { name: "Browse Jobs", path: "/jobs" },
        { name: "Post a Job", path: "/post-job" },
        {
          name: "Categories",
          path: "#", // no page, just category section
          sublinks: [
            { name: "Tech & IT", path: "/jobs/category/tech" },
            { name: "Writing & Translation", path: "/jobs/category/writing" },
            { name: "Design & Creative", path: "/jobs/category/design" },
            { name: "Marketing", path: "/jobs/category/marketing" },
            { name: "Local Jobs", path: "/jobs/category/local" },
          ],
        },
      ],
    },
    {
      name: "Gigs",
      emoji: "🎯",
      key: "gigs",
      links: [
        { name: "Find Gigs", path: "/gigs" },
        { name: "Offer a Gig", path: "/offer-gig" },
        { name: "Popular Gigs", path: "/gigs/popular" },
      ],
    },
    {
      name: "Companies",
      emoji: "🏢",
      key: "companies",
      links: [
        { name: "Browse Companies", path: "/companies" },
        { name: "Featured Employers", path: "/companies/featured" },
      ],
    },
    {
      name: "Career Resources",
      emoji: "📘",
      key: "resources",
      links: [
        { name: "Blog / Articles", path: "/blog" },
        { name: "Resume Builder", path: "/resume-builder" },
        { name: "Interview Tips", path: "/interview-tips" },
        { name: "Training & Courses", path: "/courses" },
      ],
    },
    {
      name: "User",
      emoji: "👤",
      key: "user",
      links: [
        { name: "Login", path: "/user/login" },
        { name: "Register", path: "/user/register" },
        { name: "Profile", path: "/user/profile" },
        { name: "Dashboard", path: "/user/dashboard" },
      ],
    },
    {
      name: "Admin",
      emoji: "⚙️",
      key: "admin",
      links: [
        { name: "Admin Dashboard", path: "/admin" },
        { name: "Manage Users", path: "/admin/users" },
        { name: "Manage Jobs", path: "/admin/jobs" },
        { name: "Manage Gigs", path: "/admin/gigs" },
      ],
    },
    {
      name: "Support",
      emoji: "💬",
      key: "support",
      links: [
        { name: "FAQs", path: "/faqs" },
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      name: "About Us",
      emoji: "ℹ️",
      key: "about",
      links: [
        { name: "Our Story", path: "/about/our-story" },
        { name: "Mission & Vision", path: "/about/mission" },
        { name: "Team", path: "/about/team" },
      ],
    },
  ];

  return (
    <nav className="navbar light">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="https://i.ibb.co/q3vddW9W/Chat-GPT-Image-Sep-26-2025-02-17-13-AM.png"
            alt="Logo"
          />
          <h2>Job & Gig Hub</h2>
        </Link>

        {/* Hamburger */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`nav-item ${
                openDropdown === item.key ? "active" : ""
              }`}
            >
              {item.links.length > 0 ? (
                <>
                  {/* Dropdown category */}
                  <div
                    className="nav-item-header"
                    onClick={() => toggleDropdown(item.key)}
                  >
                    <span>
                      {item.emoji} {item.name}
                    </span>
                    <FaChevronDown
                      className={`dropdown-arrow ${
                        openDropdown === item.key ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <ul className="dropdown">
                    {item.links.map((link) =>
                      link.sublinks ? (
                        <li key={link.name} className="has-sublinks">
                          <span>{link.name}</span>
                          <ul className="sub-dropdown">
                            {link.sublinks.map((sub) => (
                              <li key={sub.name}>
                                <Link to={sub.path} onClick={closeMenu}>
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={link.name}>
                          <Link to={link.path} onClick={closeMenu}>
                            {link.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </>
              ) : (
                // Simple link (Home)
                <Link to={item.path} onClick={closeMenu}>
                  {item.emoji} {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
