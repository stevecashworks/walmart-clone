import {add,minus,setDeliveryOpt,toggleDdOpen,setIsLogged} from './actions'
const reducer=(state, action)=>{
    const {type,payLoad}=action

    switch(type){
 
    case add:
    
        return {...state,count:state.count+1};
        case minus:
            return {...state,count:state.count-1};
            case setDeliveryOpt:return {...state,deliveryOpt:payLoad}; 
            case toggleDdOpen:return {...state,ddOpen:!state.ddOpen}
            case setIsLogged: return {...state,isLogged:payLoad}
            default: return state;
            
}
    
    
    



}
export default reducer