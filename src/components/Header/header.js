import './header.scss' 
import {BsXDiamond} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri'
import {RiShareForwardBoxLine} from  "react-icons/ri"
import {useEffect,useState} from 'react'
import {HiChevronDown} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import {VscHome} from 'react-icons/vsc'
     
 import {BsPerson} from 'react-icons/bs'
const Header = () => {
      const [headerClass2,setHeaderClass2]=useState('');
      const [menuOpen,setMenuOpen]= useState(false)
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
          <img className="header-bottom-img1" src={'https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png'} alt='opt'/>
            <p>How do you want your items?</p>
            <HiChevronDown style={{transition:'all 0.5s ease'}} className={menuOpen && 'up'} onClick={()=>{setMenuOpen(!menuOpen)}} />
            <span style={{position:"relative",margin:'auto 2px'}}>|</span>
            <GoLocation style={{color:'white',position:"relative" }}/>
            <p style={{fontWeight:'lighter'}}>Sacramento 18867</p>
            <VscHome style={{color:"white", margin:'auto 2px'}}/>
            <p style={{fontWeight:'lighter'}}>Sacramento Supercenter</p>
         </div>
         <div className="header-bottom-right">
            <a href="/" className='header-bottom-link'>Groceries&essentials</a>
            <a href="/" className='header-bottom-link'>tech</a>
            <a href="/" className='header-bottom-link'>fashion</a>
            <a href="/" className='header-bottom-link'>home</a>
            <a href="/" className='header-bottom-link'>new toys</a>
            <a href="/" className='header-bottom-link'>National coffee month</a>
            <a href="/" className='header-bottom-link'>flash picks</a>
            <a href="/" className='header-bottom-link'>walmart+</a>
            
         </div>
      </div>
    </div>);
}
 
export default Header;