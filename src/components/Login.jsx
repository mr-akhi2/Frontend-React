import React, { useRef, useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setlogin }) => {
  const [sendEmail, setSendEmail] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState(null); // Use state to persist OTP
  const navigate = useNavigate();

  const cont1 = useRef();
  const cont2 = useRef();
  const email = useRef();
  const Aname = useRef();
  const input1 = useRef();

  // OTP Submission Handler
  const handleSubmit = () => {
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
      }, 1500);
    } else {
      toast.error('Invalid OTP');
      input1.current.value = '';
    }
  };

  // Send OTP Handler
  const sendOtp = async () => {
    const name = Aname.current.value.trim();
    const emailValue = email.current.value.trim();
    const c1 = cont1.current;
    const c2 = cont2.current;

    if (!name) {
      toast.error("Enter your Name!");
      return;
    }

    if (!emailValue || emailValue.length < 12) {
      toast.error("Invalid Email");
      return;
    }

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
  };

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
          <input type='email' placeholder='Enter your Email' ref={email} />
          <input type="submit" value="Send OTP" onClick={sendOtp} />
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
            </div>
            <input type="submit" value="Submit" id="sub-btn" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
