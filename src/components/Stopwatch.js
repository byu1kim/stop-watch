import { useState, useEffect } from "react";
import Time from "./Time";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [div, setDiv] = useState([]);

  const stopwatch = () => {
    setTime((prevTime) => prevTime + 10);
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(stopwatch, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleLab = (e) => {
    setDiv(
      div.concat(
        <div key={div.length}>
          {div.length + 1}:<Time time={time} />
        </div>
      )
    );
  };

  return (
    <div className="App">
      <h1>
        <Time time={time} />
      </h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
      <button onClick={handleLab}>Lab</button>
      <button onClick={() => setDiv([])}>LabClear</button>
      {div}
    </div>
  );
};

export default Stopwatch;
