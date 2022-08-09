import './header.scss' 
import {BsXDiamond} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai';
import {useState,useEffect} from 'react';
const Header = () => {
     return (<div className='header'>
      <div className='header-top'>
        <div className="header-top-left">
        <img alt='walmart-logo' src='https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'/>
        
      
    <div className='department'>
    <BsXDiamond className='four-dots'/> 
     <p>Departments</p>
     </div>
     <div className='department'>
    <BsXDiamond className='four-dots'/>
     <p>Services</p> 
     </div>
 
        </div>
   
  <div className='searchinp'>
     <input placeholder='Search....' className='header-top-inp'/>
     <div className='search-icon-con'>
      <AiOutlineSearch className='header-top-search'/>
     </div>
  </div>
    
     
    </div>
     <hr/>
      <div className='header-bottom'></div>
    </div>);
}
 
export default Header;