import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import MovieDetails from './pages/MovieDetails';

import { WatchListProvider } from './context/WatchListContext';

function App() {
  return (
    <WatchListProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/watchlist" element={<Watchlist />} />

          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>

      </BrowserRouter>
    </WatchListProvider>
  );
}

export default App;