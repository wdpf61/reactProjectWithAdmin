import React, { useReducer, useState } from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const intitialState={
        loading:false,
        count:0,
        err:false
    }

    const countReducer= (state, action)=>{
       switch (action.type) {
        case "add":
            return {...state, count: state.count + 1};  
           
       case "sub":
            return {...state, count: state.count - 1} ;
        
        case "addNumber":
            return {...state, count: state.count + action.payload} ;
        
      default:
           return state;
       }
    }
    const [state, dispatch] = useReducer(countReducer, intitialState);

    const add = () => {
        //  let abc = counter + 1;
        // setCounter(abc);

        dispatch({type:"add"});
    }
    const sub = () => {
        // let abc = counter - 1;
        // setCounter(abc);
        dispatch({type:"sub"});
    }

    const addNumber = (val) => {
        //  let abc = counter + val;
        // setCounter(abc);
         dispatch({type:"addNumber", payload: val});
    }


    return (
        <>
            <h1>{state.count}</h1>

            <button onClick={add} className='btn btn-primary'>Add</button>
            <button onClick={sub} className='btn btn-primary'>Sub</button>
            <button onClick={()=>  addNumber(5)} className='btn btn-primary'>Add Number</button>

        </>

    )
}

export default Counter