import React from 'react';
import "./Header.css";
import P6 from '../components/p6.jpg';
import Image2 from '../components/image2.jpg';
import Images1 from '../components/images1.jpg';
import P13 from '../components/p13.GIF';
import P12 from '../components/p12.GIF';
import P9 from '../components/p9.GIF';
import P40 from '../components/p40.GIF';
import I3 from '../components/i3.GIF';
import I4 from '../components/i4.GIF';
import I5 from '../components/i5.GIF';
import I6 from '../components/i6.GIF';
import S1 from '../components/S1.GIF';
import S3 from '../components/S3.GIF';
import S2 from '../components/S2.GIF';


console.log(P6); 
console.log(P40); 
console.log(Image2); 
console.log(Images1); 
console.log(P13); 
console.log(P12); 
console.log(P9); 
console.log(I3); 
console.log(I4); 
console.log(I5); 
console.log(I6); 
console.log(S1); 
console.log(S3);
console.log(S2); 


function items() {
    return (
       <div className='container'>
       <div style={{ backgroundImage:`url(${Images1})` }}>
      .
    </div>

    <div style={{ backgroundImage:`url(${Images1})` }}>
      .
    </div>
    <div style={{ backgroundImage:`url(${Images1})`, height:22,width:1340,position:"fixed", }}>
      .
    </div>
   

       <div style={{ backgroundImage:`url(${Image2})`,backgroundRepeat:"repeat",backgroundSize:"contain", 
    height:2540,width:1349,
    }}>
        .
       
        <div style={{ backgroundImage:`url(${P6})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:460,width:1349,
    
    }}>
      
    </div>
    <div ><table align='center' cellPadding={20} ><tr><th>Summer Special Discount Flate 40% OFF</th></tr></table></div>

   <table cellPadding={30}   border={0} align="center">
    <tr>
        <td>
        <div style={{ backgroundImage:`url(${P13})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,marginLeft:80,
    }}>
         .
   
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${P12})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,
    }}>
       .
        
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${P9})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,
    }}>
      
     .
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${P40})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,
    }}>
      
     .
        </div>
        </td>

    </tr>
  </table>

  <div ><table align='center' cellPadding={20} ><tr><th>summer Special Discount Flate 35% OFF</th></tr></table></div>


  <table cellPadding={30}   border={0} align="center">
    <tr>
        <td>
        <div style={{ backgroundImage:`url(${I3})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,marginLeft:80,
    }}>
         .
   
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${I4})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,
    }}>
       .
        
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${I5})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,
    }}>
      
     .
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${I6})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:400,width:260,
    }}>
      
     .
        </div>
        </td>

    </tr>
   </table>

   <div ><table align='center' cellPadding={20} ><tr><th>TOP SELLS  &   HIHG RATING ITEMS</th></tr></table></div>

   <table cellPadding={20}   border={0} align="center">
    <tr>
        <td>
        <div style={{ backgroundImage:`url(${S1})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:660,width:360,marginLeft:80,
    }}>
         .
   
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${S3})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:660,width:360,
    }}>
       .
        
        </div>
        </td>
        <td>
        <div style={{ backgroundImage:`url(${S2})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:660,width:360,
    }}>
      
     .
        </div>
        </td>
       

    </tr>
   </table>


   <table  className='para1' align='center' cellPadding={5}>
   <tr><td></td></tr>
   <tr><td></td></tr>
   <tr><td></td></tr>
   <tr><th><h1>Wear classis wear Traditions</h1></th></tr>
   <tr><th>All copy right recieaved   CULTUR |  email : culturs.pk@gmail.com | cell no : 21313-244567  | Instagram  :   cultursofficial</th></tr>
 </table>
 

    </div>

  


  
 

 <div style={{ backgroundImage:`url(${Images1})`, height:30,width:1349, }}>
      .
    </div>

</div>

      );
  }
  
  export default items;


