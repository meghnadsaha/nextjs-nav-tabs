"use client";

import { useState } from "react";
import "./megamenu/megaMenu.css";
import MegaMenu from "./megamenu/MegaMenu";
import Notifications from "./notifications/Notifications";
import NotificationDropdown from "./notifications/Notifications";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [suggestions, setSuggestions] = useState([]); // State for suggestions
  const [selectedIndex, setSelectedIndex] = useState(-1); // State for currently selected suggestion

  // Example predefined suggestions
  const predefinedRoutes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
  ];

  // Update suggestions as user types
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedIndex(-1); // Reset selected index

    // Filter suggestions based on input
    if (query.trim()) {
      const filteredSuggestions = predefinedRoutes.filter((route) =>
        route.name.toLowerCase().includes(query.toLowerCase())
      );

      // If no matches, show the "No direct route found" message
      if (filteredSuggestions.length === 0) {
        setSuggestions([
          {
            name: `Search Results: No direct route found for: ${query}`,
            path: null,
          },
        ]);
      } else {
        setSuggestions(filteredSuggestions);
      }
    } else {
      setSuggestions([]); // Clear suggestions for empty input
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      // Move selection down
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      // Move selection up
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      if (selectedIndex !== -1 && suggestions[selectedIndex].path) {
        // Navigate to the selected suggestion
        window.location.href = suggestions[selectedIndex].path;
      }
    }
  };

  const handleSuggestionClick = (path) => {
    if (path) {
      window.location.href = path; // Redirect to the selected path
    }
  };

  return (
    <>
      <nav className="navbar bg-body-secondary">
        <div className="container-fluid">
          <div className="row align-items-center w-100">
            {/* Brand */}
            <div className="col-auto">
              <a className="navbar-brand" href="#">
                <img
                  src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                  alt=""
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Bootstrap
              </a>
            </div>

            {/* Center-Aligned Search Form */}
            <div className="col d-flex justify-content-center">
              <div
                className="search-container"
                style={{
                  position: "relative",
                  width: "50%", // Adjust width as needed
                }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search (e.g., home, about, contact)"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown} // Listen for arrow and enter keys
                  style={{
                    borderRadius: "50px",
                    height: "30px",
                  }}
                />
                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <ul
                    className="suggestions-dropdown"
                    style={{
                      position: "absolute",
                      top: "35px",
                      left: 0,
                      right: 0,
                      backgroundColor: "white",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      zIndex: 10,
                      padding: "0",
                      margin: "0",
                      listStyle: "none",
                    }}
                  >
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        style={{
                          padding: "10px",
                          cursor: suggestion.path ? "pointer" : "default",
                          color: suggestion.path ? "black" : "gray",
                          backgroundColor:
                            selectedIndex === index ? "#f0f0f0" : "white",
                        }}
                        onClick={() => handleSuggestionClick(suggestion.path)}
                      >
                        {suggestion.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Placeholder for Right-Side Items */}
          <NotificationDropdown/>

          </div>
        </div>
      </nav>

      <MegaMenu />
    </>
  );
};

export default NavBar;
