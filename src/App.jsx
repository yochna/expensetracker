import Navbar from "./components/navbar/Navbar";
import Landing from "./components/navbar/Landing/Landing";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Landing />
      </div>
    </>
  );
}

export default App;
