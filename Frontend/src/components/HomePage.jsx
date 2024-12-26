// src/components/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axiosInstance from '../axios';  // Import the axios instance

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request using the axios instance
    axiosInstance.get('/your-endpoint')  // Replace with your actual endpoint
      .then(response => {
        setData(response.data); // Set the data from the API response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="home-container">
      <h1>Welcome to Pincode Search</h1>
      <div className="home-links">
        <Link to="/search" className="home-link">Search Pincode</Link>
        <Link to="/favorites" className="home-link">View Favorites</Link>
      </div>

      {/* Display fetched data */}
      <div>
        <h2>Fetched Data:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>  // Adjust based on your actual data structure
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
