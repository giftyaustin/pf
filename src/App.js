import "./bg.css";
import Navbar from "./components/Navbar";
import Intro from "./components/introComponents/Intro";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Hire from "./components/hire/Hire";
import {Routes, Route} from "react-router-dom";
import HireDev from "./components/HireDev";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={
    <div className="App">
      <Navbar/>
     <Intro/>
     <Projects/>
    
    <Footer/>
    </div>}/>
    <Route exact path="/hire" element={<HireDev/>}/>
    </Routes>
  );
}

export default App;
