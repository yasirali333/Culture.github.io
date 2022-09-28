import React from 'react';
import Culturs from '../components/culturs2.png';
import "./Loginform.css";

console.log(Culturs); // /logo.84287d09.png

function logo() {
  // Import result is the URL of your image
  return (
  <div className='pic1'>
    <table align='center'>
      <tbody>
      <tr><th><img src={Culturs} alt="Culturs" /></th></tr>
      </tbody>
  </table>
  </div>
  )
}

export default logo;