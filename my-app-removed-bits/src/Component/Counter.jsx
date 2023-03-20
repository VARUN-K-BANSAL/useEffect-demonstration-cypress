import React, {useState, useEffect} from "react";

function Counter(props) {
    let [countVal, setCountVal] = useState(0);
    let [textVal, setTextVal] = useState(0);
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
  
    // Limit this useEffect from calling multiple times, means restrict it to be called only once i.e., when the component is mounted
    useEffect(() => {
      console.log('Component mounted');
    });
  
    // modify this useEffect such that it is called only when the count state changes
    useEffect(() => {
      console.log('Count updated');
      setCountVal(countVal + 1)
    });
  
    useEffect(() => {
      console.log('Text updated');
      setTextVal(textVal + 1)
    }, [text]);
  
    // modify the useEffect such that 'Interval cleared' is printed only when the component is unmounted
    useEffect(() => {
      console.log('Interval cleared');
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