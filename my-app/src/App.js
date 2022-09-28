/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Collection from './Pages/Collection';
import Login from './Pages/login';
import Home from './Pages/Home';
import Error from './Pages/Error';




function App () {
  return (
  
  <BrowserRouter>
  <Routes>
    
  {/* <Route path="/" element={<Login/>}/> */}
    <Route path="/" element={<Login/>}/>
    <Route path="/collection" element={<Collection/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
