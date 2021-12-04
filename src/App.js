import React from 'react'
// eslint-disable-next-line 
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router'

import Home from "./Home";
import MyChallengeTab from './MyChallengeTab';
import Account from './components/Account';
import CreateChallenge from './CreateChallenge';

function App() {

  return (
    <Router>
      <header><div className="nav">
        <div className="navLeft">
          <Link to="/">

            <button className="navName">challenges</button>

          </Link>
        </div>

        <Link to="/newchallenge">

        </Link>
        <div className="navRight">

        <Link to="/mychallenge">
            <button className="navMyProfile"> My Challenges</button>
        </Link>
          
          {/* <button className="navWallet">Wallet</button> */}
          <Account/>

          {/*<Link to="/vote2">
          <button> 검증(임시버튼)</button>

          </Link>*/}
          
        </div>
      </div>
      </header>
      <hr />
      <main>
        <div>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newchallenge" element={<CreateChallenge />} />
        {/*<Route path="/vote2" element={<Vote2 />} />*/}
        <Route path="/mychallenge" element={<MyChallengeTab />} />
    
		</Routes>
		</div>

      </main>
    </Router>
  );
}
export default App;