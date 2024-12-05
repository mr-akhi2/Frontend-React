import React, { useEffect, useState } from "react";
import "./Client.css";


const Clients = [
  { name: "ishant", email: "ishannt@gmail.com", phone: "1234567890" },
  
];

function Claimstatus() {
 
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
      <h1>Claim Status</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Date created</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Status</th>
            <th>Status Descriptin</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each client */}
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>pending</td>
              <td>{client.mobileNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Claimstatus;
