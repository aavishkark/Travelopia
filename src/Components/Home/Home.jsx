import React, { useState } from 'react'
import './home.css'
const Home = () => {
    const [flag,setflag]=useState(false)

    const handleClick=()=>{
         setflag(true)
    }
    const handleOk=()=>{
        setflag(false)
    }
  return (
    <div className='container'>
        <img id="backgroundImage" src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg" alt="view of a golbe in hand" loading="lazy"/>
            <div id="overlay"></div>
            <div className={`alert ${flag? 'open' : ''}`}>
              <p id='alertText' style={{fontSize:"x-large"}}>Hello, World</p>
              <button id='okBtn' onClick={handleOk}>Ok</button>
            </div>
            {flag?"":<div className={`title`}>
                <p id='titleText'>Welcome To Travelopia</p>
                <button id="clickBtn" onClick={handleClick}>Click Here</button>
            </div>}
    </div>
  )
}

export default Home