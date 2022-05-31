import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import GroceryApp from './GroceryApp';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';
import JsonAPI from './components/JsonAPI';
const App = () => {
  const [lang, setLang] = useState('english');
  return (
    <div>
      <LanguageContext.Provider value={lang}>
        <ColorContext.Provider value='blue'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='news/:newid' element={<News />} />
            <Route path='about' element={<About />} />
            <Route path='posts' element={<JsonAPI />} />
            <Route path='grocery' element={<GroceryApp />} />
          </Routes>
          <Footer />
        </ColorContext.Provider>
      </LanguageContext.Provider>
      <div className='App'>
        React Context Text {lang}
        <button onClick={() => setLang('English')}>English</button>
        <button onClick={() => setLang('French')}>French</button>
      </div>
    </div>
  );
};

export default App;
