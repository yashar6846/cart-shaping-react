
import './App.css';
import { useState } from 'react';

function App() {
  const [count , setCount] = useState(0)
  return (
   
    <div className="App">
      <h3>{count}</h3>
      <header>
        <h4>yashar</h4>
        <div></div>
        <button onClick={() => setCount(count + 1)}>click{count}</button>
      </header>
    </div>
  );
}

export default App;
