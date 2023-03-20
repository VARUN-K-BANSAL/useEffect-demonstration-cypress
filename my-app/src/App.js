import { useState } from 'react';
import './App.css';
import Counter from './Component/Counter';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {visible && <Counter setVisible={setVisible}/>}
      <h3 id='isVisible' style={{display: "none"}}>{visible}</h3>
    </div>
  );
}

export default App;
