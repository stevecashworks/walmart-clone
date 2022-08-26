import './headerdd.scss'
import {data} from './data'
const Headerdd=({Icon1,Icon2})=>{
    return(
        <div className="headerdd">
  <div className='option-img-list'>

    { data.map((x,index)=>{
        return(<div  key={`${index} ${x.text}`}>
             <img className='delivery-opt-img' src={x.img} alt={x.text}/>
             <p>{x.text}</p>
        </div>
        )
    })}
  </div>
  <div className='delivery-address'>
    <Icon1 style={{color:'gray',margin:"15px 20px", fontSize:"20px"}}/>
    <p class="bolded-delivery-text"> add an address for delivery</p>
    <p class="delivery-text"></p>



  </div>
        </div>
    )
}
export default Headerdd