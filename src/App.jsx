import { useContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';

function App() {

  const { user, isReady } = useContext(AuthProvider);
  console.log(user);
  console.log(user);

  return (
    <div className="App">
      {isReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {user && <Route path="/" element={<Home />}></Route>}
            {!user && (
              <Route path="/" element={<Navigate to="/login" />}></Route>
            )}

            {user && (
              <Route path="/login" element={<Navigate to="/" />}></Route>
            )}
            {!user && <Route path="/login" element={<Login />}></Route>}

            {user && (
              <Route path="/signup" element={<Navigate to="/" />}></Route>
            )}
            {!user && <Route path="/signup" element={<Signup />}></Route>}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
