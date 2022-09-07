import './headerdd.scss'
import {data} from './data'
import {FiChevronRight}from 'react-icons/fi'
import { setDeliveryOpt } from '../../../../../state-management/actions'
import { AppContext } from '../../../../../App'
import {useContext} from 'react'
const Headerdd=({Icon1,Icon2})=>{
   const {state,dispatch}=useContext(AppContext);
    const {deliveryOpt} =state  
    return(
        <div className="headerdd">
  <div className='option-img-list'>

    { data.map((x,index)=>{
        return(<div  key={`${index} ${x.text}`}>
        <div className={`delivery-opt-img-container ${(index===deliveryOpt)&&"active-opt"}`}onClick={()=>{if(deliveryOpt!==index){dispatch({type:setDeliveryOpt,payLoad:index})}}}>
             <img className={'delivery-opt-img' }src={x.img} alt={x.text}/>
             { (index===deliveryOpt)&& <p className="active-opt-after" onClick={()=>{dispatch({type:setDeliveryOpt,payLoad:null})}} >x</p>}
              </div>
             <p>{x.text}</p>
        </div>
        )
    })}
  </div> 
  <div className='delivery-address'>
    <div className="delivery-div1-top">

    <Icon1 style={{color:'gray',margin:"15px 20px", fontSize:"20px"}}/>

    <p class="bolded-delivery-text"> add an address for delivery</p>
    </div>
    <p class="delivery-text">Sacramento, CA 972675</p>
    <button className="delivery-opt-btn">Add address for delivery</button>



  </div>
   <div className='delivery-address'>
    <div className="delivery-div1-top">

    <Icon2 style={{color:'gray',margin:"15px 5px", fontSize:"16px"}}/>

    <p class="bolded-delivery-text">Sacramento Supercenter</p>
    </div>
    <div className="supercenter">

    <p class="delivery-text">8915, Gerber road Sacramento, CA 95829</p>

    <FiChevronRight/>
  
    </div>
<div className="supercenter-bottom">
<p class="pickup-option">Curbside pickup</p>
<p class="pickup-option">in-store pickup</p>
</div>

  </div>
        </div>
    )
}
export default Headerdd