
import './App.css';
import Todolist from './components/todo';

function App() {
  const todos=[
    {id:1,task:'task1',status:'completed'},
    {id:2,task:'task3',status:'In Progress'},
    {id:3,task:'task3',status:'Ready'},
    {id:4,task:'task4',status:'completed'},
    {id:5,task:'task5',status:'In Progress'}
  ];
  return (
    <div className="App">
      <header className="App-header">
       
       <Todolist todos={todos} />
      </header>
    </div>
  );
}

export default App;
