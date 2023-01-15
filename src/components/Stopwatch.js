import { useState, useEffect } from "react";
import Time from "./Time";
import "../styles/Stopwatch.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { save } from "../features/watches/watchesSlice";

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

  // REDUX
  const watches = useSelector((state) => state.watches.items);
  const dispatch = useDispatch();

  const handleSave = () => {
    const date = new Date();
    const today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const obj = { date: today, time: time };
    dispatch(save());
    console.log("??");
  };

  const test = () => {
    console.log("TEST");
    const a = localStorage.getItem("stopwatch");
    console.log(a);
  };
  return (
    <div className="stopwatch">
      <div className="time">
        <Time time={time} />
      </div>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
        <button onClick={handleLab}>Lab</button>
        <button onClick={() => setDiv([])}>LabClear</button>
        <button onClick={() => dispatch(save({ d: "" }))}>Save</button>
        <button onClick={test}>TEST</button>
        {/* Save : send current datetime - time (start time) */}
        {div}
      </div>
    </div>
  );
};

export default Stopwatch;
