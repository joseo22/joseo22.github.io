import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // CSS 파일 import
import Board from './Components/Board';
import Home from './Components/Home';
import BoardWrite from './Components/BoardWrite';
import BoardUpdate from './Components/BoardUpdate';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
            <li>
              <Link to="/write">Write</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/write" element={<BoardWrite />} />
            <Route path="/update/:idx" element={<BoardUpdate />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
