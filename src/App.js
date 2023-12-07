import { useState, useEffect} from 'react';
import './App.css';



const useRandomCounter  = (initialValue = 0) =>{
    const [value, setValue] = useState(initialValue)


    const generateRandomNumber  = () =>{
        setValue(+(Math.random() * (50 - -50) + -50).toFixed(0)) 
    }

    useEffect(()=>{
        generateRandomNumber()
    },[])


    const updateCounter  = (num) =>{
        if(value >= 50 || value <= -50){
            return
        }
        setValue(value => value + num)
    }

    const resetCounter  = () =>{
        setValue(0)
    }


    return {value, resetCounter , generateRandomNumber , updateCounter  }

}



const Counter = () => {

    const counter = useRandomCounter ('')
    const { value, generateRandomNumber, updateCounter, resetCounter} = counter
   


    return (
      <div className="component">
        <div className="counter">{value}</div>
        <div className="controls">
          <button onClick={()=> updateCounter(+1)}>INC</button>
          <button onClick={()=> updateCounter(-1)}>DEC</button>
          <button onClick={generateRandomNumber}>RND</button>
          <button onClick={resetCounter} >RESET</button>
        </div>
      </div>
    )
}

const RndCounter = () => {

    const counter = useRandomCounter('')
    const {value, generateRandomNumber, resetCounter} = counter

    return (
      <div className="component">
        <div className="counter">{value}</div>
        <div className="controls">
          <button onClick={generateRandomNumber}>RND</button>
          <button onClick={resetCounter}>RESET</button>
        </div>
      </div>
    )
}




function App() {
    return (
        <>
            <Counter/>
            <RndCounter/>
        </>

    );
}

export default App;
