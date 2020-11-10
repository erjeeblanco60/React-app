import React from 'react'
import './css/GoalList.css';

const GoalList = ({goals}) => {
  console.log(goals)
    return (
        <> 
          <ul className="goal-list">
            {goals.map(goal => {
              return <li> {goal.text} </li>;
            })}

          </ul>
        </> 
    );
  };

export default GoalList
