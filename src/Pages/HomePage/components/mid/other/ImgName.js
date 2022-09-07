const ImgName=({img,name})=>{
    return(
        <div style={{width:"45%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center", margin:"5px"}}>
        <img src={img} alt={name} />
        <p>{name}</p>

        </div>
    )
     
}
export default ImgName