import React from 'react';
import "./Header.css";
import Picture2 from '../components/picture2.jpg';

console.log(Picture2); 

export default function slides() {
    return (
         
 
 <div className='slide'>
    <table align='center'>
      <tr><th><img src={Picture2} alt="Picture2" /></th></tr>
  </table>
  </div>

 


    );
  }