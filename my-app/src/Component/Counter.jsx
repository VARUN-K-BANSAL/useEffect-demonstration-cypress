import React, {useState, useEffect} from "react";

function Counter(props) {
    let [countVal, setCountVal] = useState(0);
    let [textVal, setTextVal] = useState(0);
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
  
    useEffect(() => {
      console.log('Component mounted');
    }, []);
  
    useEffect(() => {
      console.log('Count updated');
      setCountVal(countVal + 1)
    }, [count]);
  
    useEffect(() => {
      console.log('Text updated');
      setTextVal(textVal + 1)
    }, [text]);
  
    useEffect(() => {
      return () => {
        console.log('Interval cleared');
      };
    }, []);

    const unmount = () => {
        props.setVisible(false)
    }
  
    return (
      <>
        <h1 className="heading">Count: {count}</h1>
        <button id="increment" onClick={() => setCount(count + 1)}>Increment</button>
        <button id="unmount" onClick={() => unmount()}>Unmount this component</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p id="countValField" style={{display: "none"}}>{countVal}</p>
        <p id="textValField" style={{display: "none"}}>{textVal}</p>
      </>
    );
  }
  
  export default Counter;