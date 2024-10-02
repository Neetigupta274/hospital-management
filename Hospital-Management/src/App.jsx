import React,{useState} from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import Admin from './pages/Admin/Admin.jsx';
import Navbar from './pages/Navbar/Navbar.jsx';
import './App.css';



export default function App(){
  let [details, setDetails] = useState([]);
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details details={details}/>}/>
        <Route path="/admin" element={<Admin details={details} setDetails={setDetails}/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}