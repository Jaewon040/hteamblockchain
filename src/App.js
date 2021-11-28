import React from 'react'
// eslint-disable-next-line 
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router'

import Home from "./Home";
import Vote from "./Vote";
import Vote2 from "./Vote2";
import myChallengeTab from './myChallengeTab';

function App() {

  return (
    <Router>
      <header><div className="nav">
        <div className="navLeft">
          <Link to="/">

            <button className="navName">challenges</button>

          </Link>
        </div>

        <Link to="/vote">

        </Link>
        <div className="navRight">

          <Link to="/vote2">
            <button className="navMyProfile">My Challenges</button>
          </Link>
          
          <button className="navWallet">Wallet</button>
          
        </div>
      </div>
      </header>
      <hr />
      <main>
        <div>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/vote2" element={<Vote2 />} />
		</Routes>
		</div>

      </main>
    </Router>
  );
}
export default App;