import React from 'react';
import {  useRef, useState } from 'react';
import './ReportG.css';

const Report = () => {
  
  const [Acco,setAcco]=useState('_______');
  const [surgery,setsurgery]=useState('_______');
  const [Problem,setproblem]=useState('_______');
  const [Hospital_name,setHospital_name]=useState('_______');
  const [address,setaddress]=useState('_______');
  const [DR_name,setDR_name]=useState('_______');
  const [Percentage,setPercentage]=useState('_______');
  const [Ammount,setAmmount]=useState('_______');
  const [regared,setregared]=useState('_______');

  function print() {
    let mainContent = document.querySelector('.Report_container').innerHTML;
  
    // Open a new print window
    let printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; margin: 20px; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(mainContent);  // Insert only the content of the .container
    printWindow.document.write('</body></html>');
    printWindow.document.close(); // Close the document for writing
    printWindow.print();  // Trigger the print dialog
  }
  // useref
  const Ac=useRef();
  const Dname=useRef();
  const regard=useRef();
  const Pername=useRef();
  const adress=useRef();
  const hname=useRef();
  const drname=useRef();
  const sname=useRef();
  const ammount=useRef();
  function submitInput(){
    let inpbx=document.getElementById('inpbx');
    let header=document.getElementById('header');
    let ac=Ac.current.value;
    setAcco(ac);
    let dn=Dname.current.value;
    setproblem(dn);
    let rgn=regard.current.value;
    setregared(rgn);
    let prn=Pername.current.value;
    setPercentage(prn);
    let adn=adress.current.value;
    setaddress(adn);
    let hnm=hname.current.value;
    setHospital_name(hnm);
    let srm=drname.current.value;
    setDR_name(srm);
    let sm=sname.current.value;
    setsurgery(sm);
    let am=ammount.current.value;
    setAmmount(am);
    inpbx.style.display="none";
    header.style.display="block";
  }
  
  return (
    <>
    <div id='body'>
    <div id='header'>
    <div className="Report_container" id='main'>
      <div>
        <h2 id='head'>Health Insurance Claim Letter</h2>
      </div>
      <div>
        <b id='b'> To Claim Manager</b>
      </div>
      <div>
        <h4>Good Day!</h4>
        <p>This letter is in regards to the medical insurance <b>{Acco}</b> that i hold with your insurance company . I would like to request a claim for the medical expences that i incurred owing to my medical treatment . </p>
        <p>
          Recently I had a  <b> {Problem}</b> Problem which required  <b>{surgery}</b> . I was admitted  to <b>{Hospital_name}</b> which is located as <b>{address}</b> . My  surgeon was <b>{DR_name}</b> .As per the Insurance Policy i can claim <b>{Percentage}</b> Of the medical Expences . The total bill came out to be  <b>{Ammount}</b>
        </p>
        <p> I would request  you to consider my appeal at the earliest . please Find enclosed the relevant document for your refrence . Kindly let me know if you require any  other documents</p>
      </div>

      <h4>Regard,</h4>
      <i id='bc'>{regared}</i> 
    </div>
    <button onClick={print}>Print</button>
    </div>
    {/* input box */}
    <div className="inputbox" id='inpbx'>
    <h1 id='head'>Fill the Forms</h1>
      <input ref={Ac} type="text" placeholder='Enter your Accoun number' />
      <input ref={Dname} type="text" placeholder='Enter your disease name' />
      <input ref={sname} type="text" placeholder='Enter your surgery' />
      <input ref={hname} type="text" placeholder='Enter your Hospital_name' />
      <input ref={adress} type="text" placeholder='Enter your address' />
      <input ref={drname} type="text" placeholder='Enter your DR_name' />
      <input ref={Pername} type="text" placeholder='Enter your Percentage' />
       <input ref={ammount} type="text" placeholder='Enter your Ammount' />
       <input ref={regard} type="text" placeholder='Enter regarding ' id='reg'/>
       <input type="submit" value="submit" id='reg' onClick={submitInput}/>
    </div>
    </div>
    </>
  );
}


export default Report;
