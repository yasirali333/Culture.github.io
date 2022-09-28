import React from 'react';
import "./Header.css";
import Culturs from '../components/culturs2.png';
import Images1 from '../components/images1.jpg';
import { NavLink } from 'react-router-dom';


console.log(Images1);
console.log(Culturs);

export default function Header() {
    return (
        <div className='navbar'>
        
         <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <NavLink to="/home" style={{textDecoration: 'none'}} ><div> <a className="navbar-brand" href="/">Culture</a></div></NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/collection" style={{textDecoration: 'none'}} ><div><a className="nav-linked" aria-current="page" href="/" style={{textDecoration:'none'}}>Collection</a></div></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about" style={{textDecoration: 'none'}} ><div><a className="nav-linked" href="/" style={{textDecoration:'none'}}>About</a></div></NavLink>
        </li>
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form> */}
      <div style={{ backgroundImage:`url(${Culturs})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:60,width:120,
    }}></div>
      </div>
     
</div>
</nav>


        
   

        </div>
    );
  }
 
  