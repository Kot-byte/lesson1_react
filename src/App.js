import logo from './logo.svg';
import './App.css';
import Greeting, { GreetingNew } from './Greeting';
import Counter from './Counter';
import Clock from './Clock';

function App() {
  return (
   <div className='App'>
   <Greeting />
   <GreetingNew name = "Мария" />
   <Counter />
   <Clock />
   </div>
  );
}

export default App;
