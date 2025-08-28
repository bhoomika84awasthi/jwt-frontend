import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
