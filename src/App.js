
import './App.css';
import GoalList from './components/GoalList';

function App() {
    const courseGoals = [
      {id: 'CG1', text: 'finish course'},
      {id: 'CG2', text: 'Learn All about the course'},
      {id: 'CG3', text: 'Help other student in the Course'},
    ]


  return (
      <> 
        <h2 className="course-goals"> Course Goals </h2>
        <GoalList goals={courseGoals} />
      </> 
  );
}

export default App;
