// App.js

import './App.css';
import { useState } from 'react';
import TimerThree from './components/TimerThree';

import ToDoList from './components/ToDoList';
import IronbnbList from './components/IronbnbList';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <ToDoList />
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <TimerThree />}

      <IronbnbList/>
    </div>
  );
}
export default App;
