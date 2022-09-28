import React from 'react';
import Images1 from '../components/images1.jpg';
import Image2 from '../components/image2.jpg';
// import Images3 from '../components/images3.jpg';
import "./Header.css";

console.log(Images1); 
console.log(Image2); 
// console.log(Images3);



export default function carousel1() {
    return (
        <>
 <div style={{ backgroundImage:`url(${Images1})` }}>
      Ajrak
    </div>
    <div style={{ backgroundImage:`url(${Images1})` }}>
      Ajrak
    </div>

    <div style={{ backgroundImage:`url(${Images1})`,height:22,width:1349,position:"fixed", }}>
      Ajrak
    </div>


    <div style={{ backgroundImage:`url(${Image2})`,backgroundRepeat:"repeat",backgroundSize:"contain", 
    height:900,width:1349,
    }}>
      <table align='center'  className='para1' cellSpacing={20} cellPadding={20}>
      <tr><td></td></tr>
      <tr><td></td></tr>
        <tr><td>Greatcontent is a leading Pakistani provider of multilingual editorial SEO</td></tr><tr><td> and marketing content based in Sindh.</td></tr>

        <tr><td>Since 2022 August, we have been serving more than 1,000 clients per year from a</td></tr><tr><td> wide range of industries in the analysis, conception, creation and</td></tr><tr><td> translation of high-quality  and Traditional  dresses in more than 30 countries. We </td></tr><tr><td>attach great importance to high-quality and unique fashion that enables</td></tr><tr><td> SEO and marketing measures to develop their maximum potential.</td></tr><tr><td>

Be a part of Respectful Culturs and wear traditions!</td></tr>
        </table>

        <table  className='para1' align='center' cellPadding={15}>
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td><h1> Wear classis wear Traditions</h1></td></tr>
            <tr><td>All copy right recieaved   CULTUR |  email : culturs.pk@gmail.com | cell no : 21313-244567  | Instagram  :   cultursofficial</td></tr>
        </table>
    </div>

    <div style={{ backgroundImage:`url(${Images1})`,height:22,width:1349, }}>
      Ajrak
    </div>
</>
    );
  }