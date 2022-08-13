import './header.scss' 
import {BsXDiamond} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri'
import {RiShareForwardBoxLine} from  "react-icons/ri"
     
     import {BsPerson} from 'react-icons/bs'
const Header = () => {
     return (<div className='header'>
      <div className='header-top'>
        <div className="header-top-left">
        <img class="comp-logo" alt='walmart-logo' src='https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'/>
        
      
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
     <input placeholder='Search  everything at walmart or in online store .... ' className='header-top-inp'/>
     <div className='search-icon-con'>
      <AiOutlineSearch className='header-top-search'/>
     </div>
   
  </div>
  <div className='header-top-right'>

     <div className='header-top-right-option'>
     <RiShareForwardBoxLine/>
     <div>
      <div className="top-right-option">Reorder</div>
      <div className="top-right-bolded-option">My items</div>
     </div>
 
     </div>
     <div className='header-top-right-option'>
     <BsPerson/>
     <div>
      <div className='top-right-option'>sign in</div>
      <div className='top-right-bolded-option'>account</div>
     </div>
     </div>
     <div className='header-top-right-option'>
     <RiShoppingCartLine/>
     </div>
    
     
  </div>
    </div>
     <hr/>
      <div className='header-bottom'></div>
    </div>);
}
 
export default Header;