import Navbar from "./components/navbar/Navbar";
import Landing from "./components/navbar/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
   
      <Routes>
      
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>}/>
        </Route>

      
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   
  );
}

export default App;
