import React,{useState} from 'react'
import './css/NewGoal.css'

const NewGoals = (props) => {
    const [enteredText,setEnteredText] = useState('')
    // submit FUNCTION Handler for form
    const addGoalHandler = (e) => {
        e.preventDefault();
       
        const newGoal = { 
            id: Math.random().toString(),
            text: enteredText
        }
        setEnteredText('')
        
        //Pass the data to props.onAddgoals
        props.onAddGoal(newGoal);
    }
    const etxtHandler = (e) => { 
        if(e.target.value.length === 0)  { 
            throw new Error ('Invalid')
        } else { 
            setEnteredText(e.target.value)
        }
      
    }

    return (
        <>       
                                                 {/* submit Handler for form                    */}
            <form className="new-goal-form" onSubmit={addGoalHandler}> 
                <input type="text" value={enteredText} onChange={etxtHandler} required/> 
                <button type="submit">Add goals </button>
                </form>  
        
         
        </> 
    );
  };

export default NewGoals
