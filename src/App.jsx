// Created by Anthony (Tony) Marchello

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bio from './components/BioResume';
import Contact from './components/Contact';
import Mudkip from './components/Mudkip';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className="main" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <div className="content" style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bio" element={<Bio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/mudkip" element={<Mudkip />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
