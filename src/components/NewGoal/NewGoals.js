import React from 'react'
import './css/NewGoal.css'

const NewGoals = (props) => {

    // submit FUNCTION Handler for form
    const addGoalHandler = (e) => {
        e.preventDefault();
       
        const newGoal = { 
            id: Math.random().toString(),
            text: 'My New Goal'
        }

        //Pass the data to props.onAddgoals
        props.onAddGoal(newGoal);
    }

    return (
        <>       
                                                 {/* submit Handler for form                    */}
            <form className="new-goal-form" onSubmit={addGoalHandler}> 
                <input type="text" /> 
                <button type="submit">Add goals </button>
                </form>  
        
         
        </> 
    );
  };

export default NewGoals
