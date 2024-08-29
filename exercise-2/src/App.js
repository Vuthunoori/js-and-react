import logo from './logo.svg';
import Greeting from './components/greetingcard.js'
import './App.css';

function App() {
  const user = 'Lahari'; 

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name={user} /> 
      </header>
    </div>
  );
}

export default App;
