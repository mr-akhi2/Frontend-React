import React, { useRef, useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setlogin,setadmin }) => {
  const [sendEmail, setSendEmail] = useState('');
  const [semail, setsemail] = useState('email');
  const [generatedOTP, setGeneratedOTP] = useState(null); 
  const [sub_value,setsub_value] = useState('Send OTP');
  const[userType,setuserType]=useState('Client')// Use state to persist OTP
  const navigate = useNavigate();

  const cont1 = useRef();
  const cont2 = useRef();
  const email = useRef();
  const Aname = useRef();
  const input1 = useRef();

  const changeemailval=()=>{
    let dn=cont1.current;
    let dm=cont2.current;
    dm.style.display = "none";
    dn.style.display = "block";
  }

  // OTP Submission Handler
  const handleSubmit = async() => {
    const enteredOTP = input1.current.value.trim();

    if (!enteredOTP) {
      toast.error("Enter the OTP");
      return;
    }

    if (parseInt(enteredOTP) === generatedOTP) {
      toast.success("OTP Verified Successfully!");
      setTimeout(() => {
        setlogin(true);
        toast.dismiss();
        navigate("/home");
      userdetails()
      }, 1500);
    } else {
      toast.error('Invalid OTP');
      input1.current.value = '';
    }
  };

 
 const  selectedChange=(e)=>{
  setuserType(e.target.value);
  if(userType=="Admin"){
    setsub_value("Send OTP");
  setsemail('email')
   }
   else{
  setsub_value("Submit");
  setsemail('password')
   }
  }

  // Send OTP Handler
  const sendOtp = async () => {
    const name = Aname.current.value.trim();
    const emailValue = email.current.value.trim();
    const c1 = cont1.current;
    const c2 = cont2.current;
    const pattern = /^[a-zA-Z0-9_.±]+@gmail.com$/;
    if (!name) {
      toast.error("Enter your Name!");
      return;
    }
    if (!emailValue.match(pattern)) {
      toast.error("Invalid Email");
      return;
    }
    if(userType==="Admin"){
      setadmin(true);
    }
    else{
      setadmin(false);
    }
    if(name==="tpamanagement" && emailValue==="MARI@gmail.com"&&userType==="Admin"){
      setadmin(true);
      toast.success("login success!")
      setTimeout(() => {
        setlogin(true);
        toast.dismiss();
        navigate("/home");
      }, 1500);
    }
    else if(emailValue.match(pattern)&&userType!=="Admin"){
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
    setGeneratedOTP(otp); // Save the OTP in state

    c1.style.display = "none";
    c2.style.display = "block";
    setSendEmail(emailValue);

    toast.success("OTP sent successfully!");
    console.log("Generated OTP:", otp);

    try {
      const api = await fetch("https://backend-server-nryo.onrender.com/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: emailValue,
          name: name,
          otp,
        }),
      });
      console.log("API Response:", api);
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Try again.");
    }
  }
  else{
    toast.error("your username and password is invalid!")
  }
  };

  // this is for user information

  const userdetails=async()=>{
    const dname = Aname.current.value.trim();
    const dbmail= email.current.value.trim();
    let d=new Date();
    let date=d.toLocaleDateString();
    let hr=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let time=`${hr}:${min}:${sec},${date}`;
    console.log(time)
  
    try {
      let userdata = await fetch('https://mongo-connect.onrender.com/user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dname,
          email: dbmail,
          type:userType,
          time:time
        }),
      });
    
      if (!userdata.ok) {
        console.error('HTTP Error:', userdata.status, userdata.statusText);
        return;
      }
    
      let response = await userdata.json();
      console.log('User data saved:', response);
    } catch (error) {
      console.error('Fetch error:', error.message);
    }
    
  }
  return (
    <>
      <div className="main">
        <h2 id='headh2' className='text text-center'>TPA MANAGEMENT</h2>
        <p id='headp' className='text text-center'>
          TPA connects you with the world and helps you share your moments.
        </p>
        <div className="Lcontainer" ref={cont1}>
          <h2>Log in here</h2>
          <input type='text' placeholder='Enter your name' ref={Aname} />
          <input type={semail} placeholder='Enter your Email or Password' ref={email} />
          <select name="select" id="selectitm" onChange={(e)=>(selectedChange(e))}>
            <option value="Client" selected>Client</option>
            <option value="Admin" >Admin</option>
          </select>
          <input type="submit" value={sub_value} onClick={sendOtp} />
        </div>
        <div>
          <div className="container1" id="container1" ref={cont2}>
            <h2>OTP Verification</h2>
            <span id='emailspan'>Sent to: <i>{sendEmail}</i></span>
            <div className="inputsAll">
              <input
                type="number"
                className="inputs"
                ref={input1}
                placeholder="Enter Your OTP"
              />
              <Link href="/" id="changeemail" onClick={changeemailval}>change email ?</Link>
            </div>
            <input type="submit" value="submit" id="sub-btn" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
