import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Correct path

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-container">
      <h1>Your Favorite Locations</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <table className="favorites-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch Type</th>
              <th>Delivery Status</th>
              <th>District</th>
              <th>Region</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((favorite, index) => (
              <tr key={index}>
                <td>{favorite.Name}</td>
                <td>{favorite.BranchType}</td>
                <td>{favorite.DeliveryStatus}</td>
                <td>{favorite.District}</td>
                <td>{favorite.Region}</td>
                <td>{favorite.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FavoritesPage;
