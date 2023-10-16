import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Register from './pages/Register';
import Download from './pages/Download';
import Dashboard from './pages/LoggedIn/Dashboard';
import Timers from './pages/LoggedIn/Timers';
import TimeUsage from './pages/LoggedIn/TimeUsage';
import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/account/Dashboard" element={<Dashboard />} />
          <Route path="/account/Timers" element={<Timers />} />
          <Route path="/account/TimeUsage" element={<TimeUsage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App

