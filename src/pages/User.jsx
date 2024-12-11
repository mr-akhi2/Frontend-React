import React from "react";
import "./user.css"

const User = () => {
 const a=fetch('https://mongo-connect.onrender.com/user').then((res)=>{
    return res.json()
 }).then((d)=>{
    console.log(d)
 }).catch((e)=>{
    console.log(e)
 })
 console.log(a)

  return (
    <>
      <div className="container" id="tablealign">
        <div className="row">
          <div className="col-sm 12">
            <table class="table">
              <thead>
                <tr >
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Type</th>
                  <th scope="col">time</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <th scope="row">1</th>
                  <td className="border">Mark</td>
                  <td className="border">Otto</td>
                  <td className="border">@mdo</td>
                  <td className="border">@akhielsh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
