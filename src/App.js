import React from 'react'
// eslint-disable-next-line 
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router'

import Home from "./Home";
import Vote from "./Vote";
import Vote2 from "./Vote2";


function App() {

  return (
    <Router>
      <header>
      <Link to="/">
          <button>Main</button>         
        </Link>

        <Link to="/vote">
          <button>챌린지 개설</button>         
        </Link>
        <Link to="/vote2">
          <button>챌린지 검증</button>         
        </Link>
      </header>
      <hr/>
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