import './mid.scss'
import Card from './Card/card';
import {otherData} from './otherData'
import Other from './other/other';
import  Card2 from './Card2/card2'
import Rollback from './rollback/rollback.jsx';
const Mid=()=>{
    
    return(
        <div className="mid">
         <Card className="card-con"/>
         <Rollback className="card-con" />
         <Card2 className="card-con"/>
         {otherData.reverse().map(item=>{return <Other title={item.title} images={item.images} />})}
         
         
         
        </div >
    )
}
export default Mid
