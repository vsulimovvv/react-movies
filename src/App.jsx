import { Routes, Route } from 'react-router-dom';
import Navabr from './components/Navabr';
import Footer from './components/Footer';

import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <>
      {/* <Loader /> */}

      <Navabr />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
