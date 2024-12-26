import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import FavoritesPage from './components/FavoritesPage';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes with element prop pointing to the component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
