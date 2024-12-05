import React, { useState } from "react";
import "./Client.css";


const Clients = [
  { id: 1, name: "ishant", email: "ishannt@gmail.com", phone: "1234567890" },
  { id: 2, name: "akhil", email: "akjil@gmail.com", phone: "9876543322" },
  { id: 3, name: "Balchand", email: "Balchand@gmail.com", phone: "5551234567" },
  { id: 4, name: "AI", email: "lisa.Ai@gmail.com", phone: "5559876543" }
  
];

function Client() {
 
  const [clients, setClients] = useState(Clients);

  return (
    <div className="Client">
      <h1>Client List</h1>
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>

          </tr>
        </thead>
        <tbody>
          {/* Render each client */}
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Client;
