import { useEffect, useState } from 'react'


const PREFIX ='codetype-clone-'

 function useLocalStorage(key,intialValue){                         //backend will work as it take key as generic intial value like useState ke ander ka vlue ex true/ empty string
    const prefixedKey = PREFIX +key;

    //seting up our local storage or backend

    const [value ,setValue] = useState ( () =>{                       //using funtion inside usestate bcoz when we have data backend then usestate set the value
        const jsonValue = localStorage.getItem(prefixedKey)
         
        if ( jsonValue != null ) {
            return(JSON.parse(jsonValue))                           // if we have value in localstorage then return value otherwise
        }
        if(typeof intialValue === 'function'){
            return intialValue()
        }
        else{
            return intialValue;
        }
    })
  // createing use effect to what happen if we change/ update our value every time we type
        // and saving the value tot the localstorage if these changes occur
        useEffect (() =>{
            localStorage.setItem(prefixedKey, JSON.stringify(value))                                      //setting item to local stortage or yaha pe value ko stringfy krna
        },[prefixedKey, value])
    return ( [value ,setValue])
  
}

export default useLocalStorage