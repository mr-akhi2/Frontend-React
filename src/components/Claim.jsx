
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

const Claim = () => {
  const input1=useRef();
  const cardId1=useRef();
  const policyNumber1=useRef();
  const insuranceCompany1=useRef();
  const hospitalName1=useRef();
  const providerName1=useRef();
  const address1=useRef();
  const claimAmount1=useRef();
  const bankname1=useRef();
  const bankAccountNumber1=useRef();
  const ifscCode1=useRef();
function submitdata(e){
  e.preventDefault();
  if(input1.current.value!==""&&cardId1.current.value!==""&&bankAccountNumber1.current.value!==""){
    let fetchapi=fetch('http://localhost:9002/Claim_list',{
      method : "POST",
      headers:{
        'Content-Type': 'application/json',
      },body:JSON.stringify({
          name: input1.current.value,
           cardId: cardId1.current.value,
           policyNumber: policyNumber1.current.value,
           insuranceCompany: insuranceCompany1.current.value,
           hospitalName: hospitalName1.current.value,
           providerName: providerName1.current.value,
           address: address1.current.value,
           claimAmount: claimAmount1.current.value,
           bankName: bankname1.current.value,
           bankAccountNumber: bankAccountNumber1.current.value,
           ifscCode: ifscCode1.current.value,
      })
     })
     alert("your data inserted successfully!")
     }
  }






  // const { register, formState: { errors } } = useForm();

  

  return (
    <div className="container mt-4">
      <h3 className="text-center">NBCC Claim Form</h3>
      <form>
        {/* Policy Holder Information */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            ref={input1}
            className={`form-control `}
          />
          
        </div>

        <div className="mb-3">
          <label className="form-label">Card ID</label>
          <input
            type="text"
            ref={cardId1}
            className={`form-control`}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Policy Number</label>
          <input
            type="text"
            ref={policyNumber1}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Insurance Company</label>
          <input
            type="text"
            ref={insuranceCompany1}
            className="form-control"
          />
        </div>

        {/* Hospital/Doctor Information */}
        <h5 className="mt-4">Hospital/Doctor's Information</h5>
        <div className="mb-3">
          <label className="form-label">Hospital Name</label>
          <input
            type="text"
            ref={hospitalName1}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Provider Code</label>
          <input
            type="text"
            ref={providerName1}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
          ref={address1}
            className="form-control"
          ></textarea>
        </div>

        {/* Claim Details */}
        <h5 className="mt-4">Claim Details</h5>
        <div className="mb-3">
          <label className="form-label">Claim Amount</label>
          <input
            type="number"
            ref={claimAmount1}
            className={`form-control`}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bank Name</label>
          <input
          ref={bankname1}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bank Account Number</label>
          <input
          ref={bankAccountNumber1}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">IFSC Code</label>
          <input
            type="text"
            ref={ifscCode1}
            className="form-control"
          />
        </div>

        {/* Submission */}
        <button type="submit" className="btn btn-primary w-100"onClick={((e)=>{submitdata(e)})}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Claim;
