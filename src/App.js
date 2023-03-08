import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import NewLogin from "./components/NewLogin";

function App() {
  return (
    <div className="App">
    <div className="bgImg"></div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<NewLogin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<NewLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
