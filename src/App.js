import React, {useState} from 'react'
import './App.css';
import GoalList from './components/GoalList';
import NewGoals from './components/NewGoal/NewGoals'


function App() {
   const [courseGoals,setCourseGoals] = useState([
      {id: 'CG1', text: 'finish course'},
      {id: 'CG2', text: 'Learn All about the course'},
      {id: 'CG3', text: 'Help other student in the Course'},
    ])

      const addNewGoalHandler = (newGoal) => { 
        setCourseGoals(courseGoals.concat(newGoal))
      }

  return (
      <> 
        <h2 className="course-goals"> Course Goals </h2>
        {/* Accept the data from newGoals.js component and pass to addNewGoalHandler */}
        <NewGoals onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
        
      </> 
  );
}

export default App;
