import React, { useRef, useState } from 'react';
import "./Login.css";

const Login = ({ }) => {
  var genrateOTP;
  const cont1=useRef();
  const cont2=useRef();
  const email=useRef();
  const Aname=useRef();
  const input1=useRef();
  var genrateOTP;
   
  function sub_btn(){
    const inp1=input1.current.value;
    if(inp1==genrateOTP){
      alert("opt successfully!");
      input1.current.value="";
      setTimeout(()=>{
        alert("we are redirection to your page")
      },2000)
    }
    else{
      alert("failed");
      input1.current.value="";
    }
  }

   async function sendOtp(){
    const name1=Aname.current.value;
    const mail=email.current.value;
    const c1=cont1.current;
    const c2=cont2.current;
    if(name1.length==0){
      alert("enter your name!")
    }
     else if(mail.length==0){
      alert("enter your email")
    }
    
    else {
     genrateOTP=Math.floor(10000-Math.random()*1000);
     c1.style.display="none";
     c2.style.display="block";
     Aname.current.value="";
     email.current.value="";
    console.log("OTP send successfully!");
    console.log(genrateOTP)
    let api= await fetch("/register",{
      method:"POST",
      headers:{
      'Content-Type': 'application/json',
      }, body:JSON.stringify({
        mail,
        name:name1,
        otp:genrateOTP,
      })
    });
    console.log(api);
  }
}


  return (
    <>
    <div className="main">
      <div className="Lcontainer" ref={cont1}>
        <h2>Log in here</h2>
        <input placeholder='Enter your name' ref={Aname}/>
        <input placeholder='Enter your Email' ref={email}/>
        <input type="submit" value="send" onClick={sendOtp} />
      </div>
      <div>
      <div className="container1" id="container1" ref={cont2}>
        <h2>OTP Varification</h2>
        <div className="inputsAll">
          <input type="number" className="inputs" ref={input1} placeholder=" Enter Your OTP"/>
        </div>
        <input type="submit" value="submit" id="sub-btn" onClick={sub_btn}/>
      </div>
    </div>
      </div>
      </>
  )
}

export default Login;
