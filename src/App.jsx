import Navbar from "./components/navbar/Navbar";
import Landing from "./components/navbar/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
      </div>
    </>
  );
}

export default App;
