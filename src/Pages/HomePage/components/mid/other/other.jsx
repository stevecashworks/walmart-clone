import './other.scss' ;
import ImgName from './ImgName.js'
const Other=({title,images})=>{
    return(
        <div className="other">
      <h3 className="other-title">{title}</h3>
     
   <div className="picks">

    {images.map(data=>{
        return <ImgName name={data.name}img={data.img}/>
    })}
   </div>


        </div>
    )
}
export default Other
