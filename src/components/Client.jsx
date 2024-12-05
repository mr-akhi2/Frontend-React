import React, { useEffect, useState } from "react";
import "./Client.css";


const Clients = [
  { name: "ishant", email: "ishannt@gmail.com", phone: "1234567890" },
  
];

function Client() {
 
  const [clients, setClients] = useState(Clients);
  useEffect(()=>{
    const api1=fetch('http://localhost:9001/Client/').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log('this is data',data);
      setClients(data);
    }).catch((error)=>{
      console.log(error)
    })
  },[])


  

  return (
    <div className="Client">
      <h1>Client List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phone no.</th>
            <th>Address</th>
            <th>Current Address</th>
            <th>City</th>
            <th>PIN code</th>
            <th>State</th>
            <th>Addhar no</th>
            <th>Pan card no</th>
            <th>Account no</th>
            <th>BankName</th>
            <th>BranchName</th>
            <th>IFSC code</th>

          </tr>
        </thead>
        <tbody>
          {/* Render each client */}
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.mobileNo}</td>
              <td>{client.address}</td>
              <td>{client.currentAddress}</td>
              <td>{client.city}</td>
              <td>{client.state}</td>
              <td>{client.pinCode}</td>
              <td>{client.aadharNo}</td>
              <td>{client.panCardNo}</td>
              <td>{client.Accoutno}</td>
              <td>{client.bankName}</td>
              <td>{client.branchName}</td>
              <td>{client.ifscCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Client;
