import React, { useState } from 'react'
import "../style/HeaderStyle.css"
import {MenuIcon,XCircle} from "lucide-react"


function Header() {

  const[open,setOpen]=useState(false);


  return (

    <>

    <nav className='outer-container'>

        <h1>Your Project Name</h1>

        <div className='heading-container'>
            <p>Module-1</p>
            <p>Module-2</p>
            <p>Module-3</p>
            <p>Module-4</p>            
        </div>

        <div onClick={()=>setOpen(true)} className='burger-menu'>

          <MenuIcon color='white' size={26}/>
        </div>

    </nav>

      {open && 
    <div className='sidemenu'>
      
        <XCircle onClick={()=>setOpen(false)}  className='exit' color='red' size={28}/>

        <div className='menu-container'>
          <p>Module-1</p>
          <p>Module-2</p>
          <p>Module-3</p>
          <p>Module-4</p>
        </div>
    </div>
  }

  </>

    



  )
}

export default Header