import './card.scss'
import {data} from './cardData.js'
import{useState,useEffect} from'react'

const Card = () => {
   
    const [currentCard,setCurrentCard]= useState(4);
    useEffect(()=>{
    const interval=    setInterval(()=>{
            setCurrentCard(()=>{
                if(currentCard===4){
                    return 1;
                } 
                return  currentCard+1
            });
        },5000);
        return ()=>{
            clearInterval(interval)
        }
    } ) 
      
    return (
    <div className='card-container'>
        {data.map((card,index)=><img alt="card" className={`card ${(currentCard===(index+1))&&'active-card'}`} src={card.img} key={card.id} />)}

    </div> 
        )
}
 
export default Card;