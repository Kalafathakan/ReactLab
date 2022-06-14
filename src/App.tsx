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
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Todos from './components/todoapp/Todos';
import AddTodo from './components/todoapp/AddTodo';
import ProtectedRoute from './components/auth/ProtectedRoute';

import AuthContext from './context/AuthContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  const [lang, setLang] = useState('english');
  return (
    <div>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <LanguageContext.Provider value={lang}>
          <ColorContext.Provider value='blue'>
            <Navigation />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='news/:newid' element={<News />} />
              <Route path='about' element={<About />} />
              <Route path='posts' element={<JsonAPI />} />
              <Route element={<ProtectedRoute />}>
                <Route path='todos' element={<Todos />} />
                <Route path='addtodo' element={<AddTodo />} />
              </Route>
              <Route path='login' element={<Login />} />
              <Route path='Register' element={<Register />} />
            </Routes>
            <Footer />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </AuthContext.Provider>
      <div className='App'>
        React Context Text {lang}
        <button onClick={() => setLang('English')}>English</button>
        <button onClick={() => setLang('French')}>French</button>
      </div>
    </div>
  );
};

export default App;
