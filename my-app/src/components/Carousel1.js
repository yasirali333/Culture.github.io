import React from 'react';
import Images1 from '../components/images1.jpg';
import Image2 from '../components/image2.jpg';
import Culturs from '../components/culturs2.png';
import H1 from '../components/h1.GIF';
import H2 from '../components/h2.GIF';
import H3 from '../components/h3.GIF';
import H4 from '../components/h4.GIF';
import H5 from '../components/h5.GIF';
import Tabs from '../components/tabs.psd';
import GTH1 from '../components/GoToH1';
import GTH2 from '../components/GoToH2';
import GTH3 from '../components/GoToH3';
import GTH4 from '../components/GoToH4';
import GTH5 from '../components/GoToH5';
import "./Header.css";

console.log(Images1); 
console.log(Image2);
console.log(Culturs);  
console.log(H1); 
console.log(H2);
console.log(H3);  
console.log(H4);
console.log(H5);
console.log(Tabs);



export default function Carousel2() 
{
    return (
        <>
         <div style={{ backgroundImage:`url(${Images1})` }}> Ajrak </div>
         <div style={{ backgroundImage:`url(${Images1})` }}> Ajrak</div>

         <div style={{ backgroundImage:`url(${Image2})`,backgroundRepeat:"repeat", backgroundSize:"contain", 
          height:110,width:1349,position:"fixed", }}>
          {/* Ajrak */}
          <div style={{ backgroundImage:`url(${Images1})`,backgroundRepeat:"repeat",
          height:20,width:1349,position:"fixed",}}></div>
          {/* logo2 */}
          <table  align='center' border={0} className='logo2' cellPadding={4} cellSpacing={4}>
          <tr><th>SUMMER SALE 35% & 40% OFF ON Special ITEMS</th>
          <th >
          <div style={{ backgroundImage:`url(${Culturs})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
          height:120,width:250, }}> 
        
          </div></th>
          <th >FREE SHIPPING ALL OVER THE PAKISTAN </th>
          </tr> </table>
          <div style={{ backgroundImage:`url(${Tabs})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
          height:10,width:1350, }}> 
          <table border={0} align="center" cellPadding={5} className='tab'><tr>
           <td width={200} ><button className='tabs'><GTH1/></button></td> 
           <td width={300} ><button className='tabs'> <GTH2/></button></td> 
           <td width={200} ><button className='tabs'><GTH3/></button></td> 
           <td width={200} ><button className='tabs'><GTH4/></button></td> 
           <td width={200} ><button  type='button5' className='tabs'><GTH5/></button></td> 
         

          </tr></table>
          </div></div>
         
          <div style={{ backgroundImage:`url(${Image2})`,backgroundRepeat:"repeat",backgroundSize:"contain", 
           height:950,width:1349, }}>
          <table  cellSpacing={0} cellPadding={50} align="center">
          <tr><th> 
          <h1 className='ht'>WEAR CLASSIC WEAR TRADITIONS</h1>
          {/* <h1>WEAR TRADITIONS</h1> */ }</th></tr>
          <tr><th>
          <div style={{ backgroundImage:`url(${H1})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
          height:250,width:1249, }}></div>
          <h1 className='ht'>NEW ARRIVAL</h1>   
          </th></tr>
          <tr><th>
          <div style={{ backgroundImage:`url(${H2})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
          height:250,width:1249, }}></div>
          <h1 className='ht'>MASTER'S COLLECTION</h1>
          </th></tr></table>
          </div>
          <div style={{ backgroundImage:`url(${Image2})`,backgroundRepeat:"repeat",backgroundSize:"contain", 
           height:900,width:1349,}}>
          <table  cellSpacing={0} cellPadding={50} align="center">
          <tr><th><h6>ALL COPY RIGHT RECIEVE CULTUR/OFFICIAL.COM</h6></th></tr>
          <tr><th>
          <div style={{ backgroundImage:`url(${H3})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
           height:250,width:1249, }}></div>
          <h1 className='ht'>UNSTITICHED</h1> </th></tr>
          <tr><th>
          <div style={{ backgroundImage:`url(${H4})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
          height:250,width:1249, }}></div>
          <h1 className='ht'>STITCHED</h1>
          </th></tr>                      
          </table></div>
          <div style={{ backgroundImage:`url(${Image2})`,backgroundRepeat:"repeat",backgroundSize:"contain", 
           height:750,width:1349, }}>
          <table cellSpacing={0} cellPadding={50} align="center">
          <tr><th>  <h6>ALL COPY RIGHT RECIEVE CULTUR/OFFICIAL.COM</h6> </th></tr>
          <tr><th>
          <div style={{ backgroundImage:`url(${H5})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
           height:250,width:1249,}}></div>
          <h1 className='ht'>BABY GIRLS</h1></th></tr></table>
          <table  className='para1' align='center' cellPadding={5}>
          <tr><td></td></tr> <tr><td></td></tr> <tr><td></td></tr>
          <tr><th><h1>Wear classis wear Traditions</h1></th></tr>
          <tr><th>All copy right recieaved   CULTUR |  email : culturs.pk@gmail.com | cell no : 21313-244567  | Instagram  :   cultursofficial</th></tr>
          </table> </div>
          <div style={{ backgroundImage:`url(${Images1})` }}>Ajrak</div>
      
        </>
    );
   }