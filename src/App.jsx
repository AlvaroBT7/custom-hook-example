import { useState, useEffect } from "react";
import "./App.css";

const chooseRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

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

const useRandomColor = () => {
  const colors = ["red", "green", "blue"];
  const [color, setColor] = useState(chooseRandomItem(colors));

  useEffect(() => {
    if (color === "red") console.log("hello world");
  }, [color]);

  const handleClick = () => {
    setColor(chooseRandomItem(colors));
  };

  return [color, handleClick];
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
  const [counter, handleClickCounter] = useCounterBehavior();
  const [color, handleClickColor] = useRandomColor();
  return (
    <button
      onClick={() => {
        handleClickCounter();
        handleClickColor();
      }}
      className="button"
      style={{ backgroundColor: color }}
    >
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
