import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import GroceryApp from './GroceryApp';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='news/:newid' element={<News />} />
        <Route path='about' element={<About />} />
        <Route path='grocery' element={<GroceryApp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
