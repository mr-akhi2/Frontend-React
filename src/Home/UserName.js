import React, { useEffect, useState } from 'react'
import "./username.css"

const UserName = () => {
    const[name,setname]=useState('akhilesh')
    const[email,setmail]=useState('akhilesh@gmail.com') 
    const[time,settime]=useState('10:10');
    
   

    // useEffect(()=>{
    //     const fetapi=fetch('https://json-server-deploy-3u69.onrender.com/useName').then((res)=>{
    //         return res.json()
    //         }).then((data)=>{
    //             data.forEach(element => {
    //                 setname(element.name);
    //                 setmail(element.email);
    //                 settime(element.time);
    //                 console.log(element)
    //             });
    //         }).catch((e)=>{
    //             console.log(e)
    //         })
    // },[])

     const handle=()=>{
        let now = new Date();
        let year = now.getFullYear();
        let month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        let day = String(now.getDate()).padStart(2, '0');
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        let c={day,hours,minutes,seconds}
        
        
      let b=fetch('https://json-server-deploy-3u69.onrender.com/useName',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:"krishna",
            email:"krishna123@gmail.com",
            time:c
        })
      }).then((res)=>{
        return res.json()
      }).then((d)=>{
        console.log(d)
      }).catch((e)=>{
        console.log(e)
    })
     }




  return (
    <> 
    <div id='cnt'>
    <h4>userdata</h4>
    <div id='tmp'>
      <span>{name}</span>
      <span>{email}</span>
      <span>{time}</span>
    </div>
    <button onClick={handle}>post</button>
    </div>
    </>
  )
}

export default UserName
