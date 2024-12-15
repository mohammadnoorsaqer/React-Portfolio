import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const Projects = () => {
  const [repos, setRepos] = useState([]); // State to store fetched repositories
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current project

  // Fetch GitHub repos on component mount
  useEffect(() => {
    axios
      .get("https://api.github.com/users/mohammadnoorsaqer/repos") // Replace with your GitHub username
      .then((response) => {
        setRepos(response.data); // Set repos data in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  // Handle the "next" button click
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % repos.length); // Loop to first project
  };

  // Handle the "previous" button click
  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + repos.length) % repos.length // Loop to last project
    );
  };

  // Inline style for buttons
  const buttonStyle = {
    color: "white", // White color for arrow icons
    border: "none", // Remove border
    padding: "10px", // Padding
    margin: "5px", // Margin between buttons
    borderRadius: "50%", // Rounded button for arrows
    cursor: "pointer", // Pointer cursor
    fontSize: "20px", // Larger font size for arrows
    display: "flex", // Flexbox for centering the arrow icon
    justifyContent: "center", // Center the icon horizontally
    alignItems: "center", // Center the icon vertically
  };

  return (
    <div className="container">
      <h3 id="projects">
        <span></span>
        <span className="primary">#</span>projects
      </h3>

      <div className="projects">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card">
            <div className="img">
              <img
                src={repos[currentIndex].owner.avatar_url}
                alt={repos[currentIndex].name}
              />
            </div>
            <p>
              <span>
                <i className="fa-brands fa-html5"></i>
              </span>
              HTML{" "}
              <span>
                <i className="fa-brands fa-css3-alt"></i>
              </span>
              CSS
            </p>
            <h4>{repos[currentIndex].name}</h4>
            <div className="btn">
              <button>
                <a
                  href={repos[currentIndex].html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  View Repo
                </a>
              </button>
            </div>

            <div className="slider-controls">
              <button
                style={buttonStyle}
                onClick={prevProject}
              >
                <i className="fa fa-arrow-left"></i> {/* Left arrow icon */}
              </button>
              <button
                style={buttonStyle}
                onClick={nextProject}
              >
                <i className="fa fa-arrow-right"></i> {/* Right arrow icon */}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
