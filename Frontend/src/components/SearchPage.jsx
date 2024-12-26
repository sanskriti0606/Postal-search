import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';  // Correct path to App.css

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('code');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/search', {
        params: { query, type },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>Search Pincode</h1>
      <div className="search-options">
        <input
          type="radio"
          name="searchType"
          value="code"
          checked={type === 'code'}
          onChange={() => setType('code')}
        />
        <label>Pincode</label>
        <input
          type="radio"
          name="searchType"
          value="name"
          checked={type === 'name'}
          onChange={() => setType('name')}
        />
        <label>Location Name</label>
      </div>
      <input
        type="text"
        placeholder="Enter pincode or location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>

      {results.length > 0 && (
        <table className="result-table">
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
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.Name}</td>
                <td>{result.BranchType}</td>
                <td>{result.DeliveryStatus}</td>
                <td>{result.District}</td>
                <td>{result.Region}</td>
                <td>{result.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchPage;
