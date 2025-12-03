export const  initialState={
   loading:false,
   data:[],
   err:null
}


export const reducer= (state, action)=>{
   switch (action.type) {
    case "Loading":
       return{...state ,loading:true} 
    case "Fetch":
       return{...state , data: action.payload, loading:false}   
    case "err":
       return{...state,loading:false, err: action.payload}   
    default:
       return  state;
   }
}