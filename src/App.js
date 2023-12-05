import logo from './logo.svg';
import './App.css';
import Seconds from './Components/Seconds';
import Minutes from './Components/Minutes';
import Hours from './Components/Hours';

function App() {
  return (
    <div className="App">
      <Seconds/>
      <Minutes/>
      <Hours/>
    </div>
  );
}
export default App;
