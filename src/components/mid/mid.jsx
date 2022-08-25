import './mid.scss'
import Card from './Card/card';
import  Card2 from './Card2/card2'
import Rollback from './rollback/rollback.jsx';
const Mid=()=>{
    
    return(
        <div className="mid">
         <Card className="card-con"/>
         <Rollback className="card-con" />
         <Card2 className="card-con"/>
         
         <div className="card-con"></div>
         <div className="card-con"></div>
         <div className="card-con"></div>
        </div >
    )
}
export default Mid
