import { useState } from 'react';
import './App.css';
import Counter from './Component/Counter';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {visible && <Counter setVisible={setVisible}/>}
    </div>
  );
}

export default App;
