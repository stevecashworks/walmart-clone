import './card2.scss'
import {data} from './data'
const Card2=()=>{
return (
    <div className='card-2'>
        <div className='p-d'>
            <h5>reserve pickup and delivery</h5>
            <button>see times...</button>
        </div>
        <div className="p-u">
            <div className="popular-services">
               <div className='ps-child1'>
                <p>popular services</p>
                <a href='/'>View all</a>
                </div>
                <div className='ps-row'>
                   {data.map(p_s=>{ return <section> <img key={p_s.id} src={p_s.img} alt='p-s'  /><p>{p_s.name}</p></section>})}
                </div>
               </div>
            
        </div>

    </div>
)
}
export default Card2 