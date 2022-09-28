import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Loginform.css";

function Loginform() {   
  
  // const [show3, setShow3]=useState(true);
  const [show, setShow]=useState(false);
  const [show2, setShow2]=useState(true);
  const [text, setText]=useState("Login");
  const [text2, setText2]=useState("Login");

  // const Email ='Email';
  // const name ='Name';
  const handleReplacing =(event) =>{
    setShow2(false)
    // setShow3(name)
    setShow(true)
   
    event.preventDefault();   // to make refreshed page default;
   
    setText("Create New Account")
    setText2("Regiter")
    
  }  
  
  const handleonChange = (event) =>{
    setShow(event.target.value)
  }
 

    return (
      
      <div className='page1main' >
     <div className='logindiv'>
      
     <form >
      <table  border="0" align="center"  cellPadding={10} cellSpacing={10} value={show} onChange={handleonChange} className='log1'>
      <tbody>
       <tr ><th ><button value={text} onChange={handleonChange} className='sing-in-up'>{text}</button></th></tr>
       {show2?<tr><td ><input className='input'  type="text" name="email" placeholder='Email'/></td></tr>:null}
       {show2?<tr><td><input className='input'  type="text" name="password" placeholder='Password' /></td></tr>:null}
       {show?<tr><td><input className='input'  type="text" name="pasword" placeholder='Name' /></td></tr>:null}
       {show?<tr><td><input className='input' type="text" name="eml" placeholder='Email' /></td></tr>:null}
       {show?<tr><td><input className='input'  type="text" name="passwod" placeholder='Password' /></td></tr>:null}
       {show?<tr><td><input className='input' type="text" name="re-password" placeholder='Re-Password' /></td></tr>:null}
       <tr><td><NavLink  to="/home"><button className='button1' value={text2} onChange={handleonChange} >{text2}</button></NavLink></td></tr>
       <tr><td>If you don't have Account<button className='button2' onClick={handleReplacing}>Regiter!</button></td></tr>
       {/* <tr>
       <th colSpan={2}><font face="arial" /><button className='button1' ><NavLink style={{textDecoration: 'none' , color:'black'}} to="/home">Sing In</NavLink></button></th>
       </tr> */}
     </tbody>
      </table>
      </form>
      </div>

      {/* <div className='logindiv'>
      {null ?<form >
      <table  border="0" align="center"  cellPadding={10} cellSpacing={10}  className='log1'>
       <tr ><th >Login with your Account</th></tr>
       <tr><td><input className='input' type="text" name="email" /></td></tr>
       <tr><td><input className='input'  type="text" name="password" /></td></tr>      
       <tr><td><button className='button1'   >Register</button></td></tr>
       {/* <tr>
       <th colSpan={2}><font face="arial" /><button className='button1' ><NavLink style={{textDecoration: 'none' , color:'black'}} to="/home">Sing In</NavLink></button></th>
       </tr> */}
      {/* </table>
      </form>:show}
      </div> */}
      </div>
      );
  }
  
  export default Loginform;

        