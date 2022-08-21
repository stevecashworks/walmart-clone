import './header.scss' 
import {BsXDiamond} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri'
import {RiShareForwardBoxLine} from  "react-icons/ri"
import {useEffect,useState} from 'react'
     
     import {BsPerson} from 'react-icons/bs'
const Header = () => {
      const [headerClass2,setHeaderClass2]=useState('')
      useEffect(()=>{
         window.addEventListener("scroll",()=>{
            if(window.scrollY>0){
               setHeaderClass2('sticky');
               return;
            }
            setHeaderClass2('')
         })
      },[])
      
     return (<div className={`header ${headerClass2}`}>
      <div className='header-top'>
        <div className="header-top-left">
        <img className="comp-logo" alt='walmart-logo' src='https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'/>
        
      
    <div className='department hover-blue'>
    <BsXDiamond className='four-dots'/> 
     <p>Departments</p>
     </div>
     <div className='department hover-blue'>
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

     <div className='header-top-right-option hover-blue'>
     <RiShareForwardBoxLine/>
     <div>
      <div className="top-right-option">Reorder</div>
      <div className="top-right-bolded-option">My items</div>
     </div>
 
     </div>
     <div className='header-top-right-option hover-blue'>
     <BsPerson/>
     <div>
      <div className='top-right-option'>sign in</div>
      <div className='top-right-bolded-option'>account</div>
     </div>
     </div>
     <div className='header-top-right-option hover-blue'>
     <RiShoppingCartLine/>
     </div>
    
     
  </div>
    </div>
     <hr/>
      <div className='header-bottom'>
         <div className='delivery-options'>
          <img src={'./deliveryopt.webp'} alt='opt'/>
            <p>How do you want your items?</p>
         </div>
      </div>
    </div>);
}
 
export default Header;