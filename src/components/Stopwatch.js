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

  useEffect(() => {
    document.title = time;
  }, [time]);

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
    dispatch(save({ date: today, time: time }));
  };

  //save btn안눌러도 자동으로 저장되게 하기
  // state사용해서 버튼 사라졋다 안사라졋다
  // 슬라이스 안써도 로컬스토리지만 사용해도 되지않나 ?
  // 스타트 버튼 누를때 데이 저장 ?
  // 화면 넘기면 안돌아가는거 해결
  // 로컬스토리지에 현재값도 저장, 버튼 안눌러도, 스타트 버튼 누르는 즉시
  return (
    <div className="stopwatch">
      <div className="time-frame">
        <Time time={time} />
      </div>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
        <button onClick={handleLab}>Lab</button>
        <button onClick={() => setDiv([])}>LabClear</button>
        <button onClick={handleSave}>Save</button>
        {/* Save : send current datetime - time (start time) */}
        {div}
      </div>
    </div>
  );
};

export default Stopwatch;
