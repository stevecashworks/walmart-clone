import './rollback.scss';
import rollBackImg from './rollback.jpg'
const Rollback=()=>{
 return (
    <div className="rollback">
  <div className='rollback-top'>
    <h4>Rollback of the day</h4>
    <a href="/">View all</a>
  </div>
  <img src={rollBackImg}  alt="rollback" loading="lazy"/>
  <div className='rollback-bottom'>
    <h3 className='rollback-price'>From $243.99</h3>
    <p className='rollback-product-name'> Sony sharp lens camera</p>
  </div>
    </div>
 )
}
export default Rollback