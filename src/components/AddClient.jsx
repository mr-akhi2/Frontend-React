import React, { useState } from "react";


  

function AddClient(){
    const [formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        address: "",
        currentAddress: "",
        city: "",
        pinCode: "",
        state: "",
        aadharNo: "",
        panCardNo: "",
        bankName: "",
        branchName: "",
        Accoutno: "",
        ifscCode: "",
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: type === "checkbox" ? checked : value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("lastdatat",formData);
        if(formData.firstName.length!==0&&formData.lastName.length!==0&&formData.Accoutno.length!==0){
          fetch('http://localhost:9001/Client',{
            method:"POST",
            headers:{
              'Content-Type': 'application/json',
            },body:JSON.stringify(formData)
           }).then((res)=>{
            return res.json()
           }).then((data)=>{
            console.log(data)
           }).catch((error)=>{
            console.log(error)
           })
          }
        
        else{
          alert("please enter the required values")
        }
      };
    return(
        <>
        <div className="container mt-3">
        <h2 className="text text-center ">Fill the Client Form</h2>
            <form class="row g-3" onSubmit={handleSubmit}>
            <div class="col-md-5">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
  </div>
  <div class="col-md-5">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
  </div>
            <div class="col-md-5">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" value={formData.email} onChange={handleChange}/>
  </div>
  <div class="col-md-5">
    <label for="inputZip" class="form-label">Mobile No</label>
    <input type="text" class="form-control" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder=""/>
  </div>
  <div class="col-10">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Home"/>
  </div>
  <div class="col-10">
    <label for="inputAddress2" class="form-label">current Address</label>
    <input type="text" class="form-control" id="currentAddress" name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="city" name="city" value={formData.city} onChange={handleChange}/>
  </div>
  
  <div class="col-md-3">
    <label for="inputZip" class="form-label">Pin Code</label>
    <input type="text" class="form-control" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder=""/>
  </div>
  
  <div class="col-md-3">
    <label for="state" class="form-label">State</label>
    <select id="state" name="state" value={formData.state} onChange={handleChange} class="form-select">
      <option selected>Choose...</option>
      <option>Uttar pradesh</option>
      <option>Bihar</option>
      <option>Delhi</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Addhaar No</label>
    <input type="text" class="form-control" id="aadharNo" name="aadharNo" value={formData.aadharNo} onChange={handleChange} placeholder=""/>
  </div>
  <div class="col-md-3">
    <label for="inputZip" class="form-label">Pan Card No</label>
    <input type="text" class="form-control" id="panCardNo" name="panCardNo" value={formData.panCardNo} onChange={handleChange} placeholder=""/>
  </div>
  <div class="col-md-3">
    <label for="inputZip" class="form-label">Account no</label>
    <input type="text" class="form-control" id="Accoutno" name="Accoutno" value={formData.Accoutno} onChange={handleChange} placeholder=""/>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Bank Name</label>
    <input type="text" class="form-control" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} placeholder=""/>
  </div>

  <div class="col-md-3">
    <label for="inputZip" class="form-label">Branch Name</label>
    <input type="text" class="form-control" id="branchName" name="branchName" value={formData.branchName} onChange={handleChange} placeholder=""/>
  </div>
  <div class="col-md-3">
    <label for="inputZip" class="form-label">IFSC Code</label>
    <input type="text" class="form-control" id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder=""/>
  </div>
  
     



  <div class="col-10">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="agreeToTerms" name="agreeToTerms" value={formData.agreeToTerms} onChange={handleChange}/>
      <label class="form-check-label" for="agreeToTerms">
      I agree to the terms and conditions
      </label>
    </div>

  </div>


  <div class="col-10">
    <button type="submit" class="btn btn-primary">Add client</button>
  </div>
</form>
</div>
        </>
    )
    
};

export default AddClient;