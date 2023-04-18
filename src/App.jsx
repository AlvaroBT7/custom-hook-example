import { useState, useEffect } from "react";
import "./App.css";

const useCounterBehavior = () => {
  const [counter, setCounter] = useState(0);
  const [glow, hasGlow] = useState(false);
  const handleClick = () => {
    setCounter(counter + 1);
    hasGlow(true);
    setTimeout(() => hasGlow(false), 1000);
  };
  return [counter, handleClick, glow];
};

const Card = (props) => {
  const [counter, handleClick, glow] = useCounterBehavior();
  return (
    <div className={`card ${glow ? "glow" : ""}`.trim()} onClick={handleClick}>
      {props.children} Counter: {counter}
    </div>
  );
};

const Button = ({ children }) => {
  const [counter, handleClick] = useCounterBehavior();
  return (
    <button onClick={handleClick} className="button">
      {children} Counter: {counter}
    </button>
  );
};

const App = () => {
  return (
    <div className="app">
      <Card>Hello world</Card>
      <Button>Button 1</Button>
    </div>
  );
};

export default App;
