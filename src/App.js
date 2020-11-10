
import './App.css';
import GoalList from './components/GoalList';
import NewGoals from './components/NewGoal/NewGoals'

function App() {
    const courseGoals = [
      {id: 'CG1', text: 'finish course'},
      {id: 'CG2', text: 'Learn All about the course'},
      {id: 'CG3', text: 'Help other student in the Course'},
    ]

      const addNewGoalHandler = (newGoal) => { 
        courseGoals.push(newGoal)
        console.log(courseGoals)
      }

  return (
      <> 
        <h2 className="course-goals"> Course Goals </h2>
        <NewGoals onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
        
      </> 
  );
}

export default App;
