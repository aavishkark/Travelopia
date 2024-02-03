import {React,useState,useEffect} from 'react'
import './header.css'
import { HamburgerIcon } from '@chakra-ui/icons'
const Header = () => {
  const [settled, setSettled] = useState(false);
    useEffect(()=>{
      setSettled(true)
     },[])
  return (
    <div>
        <header>
          <div id='navbar' className={`animated ${settled ? 'settled' : ''}`}>
          <button className='link'>Home</button>
          <button className='link'>Packages</button>
          <button className='link'>Bookings</button>
          <button className='link'>About</button>
          <button className='link'>Contact</button>
          </div>
          <div id='navIcon'>
          <button className='link' id='hamIcon'><HamburgerIcon/></button>
          </div>
        </header>
    </div>
  )
}

export default Header