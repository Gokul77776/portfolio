import Navbar from "./components/Navbar";
import About from "./pages/aboutpage/About";
import Contact from "./pages/contactpage/Contact";
import Home from "./pages/homepage/Home";
import {
  Route,
  Routes,
   
} from "react-router-dom";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} ></Route>
    <Route path="/about" element={<About/>} ></Route>
    <Route path="/contact" element={<Contact/>} ></Route>
     

    </Routes>


    </>

     
  )
}