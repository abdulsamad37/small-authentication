import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserData from "./components/UserData";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userdata" element={<UserData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
