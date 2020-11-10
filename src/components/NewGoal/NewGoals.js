import React from 'react'
import './css/NewGoal.css'

const NewGoals = (props) => {


    const addGoalHandler = (e) => {
        e.preventDefault();
       
        const newGoal = { 
            id: Math.random().toString(),
            text: 'My New Goal'
        }
        
        props.onAddGoal(newGoal);
    }

    return (
        <> 
            <form className="new-goal-form" onSubmit={addGoalHandler}> 
                <input type="text" /> 
                <button type="submit">Add goals </button>
                </form>  
        
         
        </> 
    );
  };

export default NewGoals
