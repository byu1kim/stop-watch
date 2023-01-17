import { useState } from "react";
import { useSelector } from "react-redux";
import Time from "../components/Time";

const Stats = () => {
  const watches = useSelector((state) => state.watches.items);
  const [thisWeek, setThisWeek] = useState([]);
  const [max, setMax] = useState("");

  function dateCompare(date1, date2) {
    if (typeof date1 == "string") {
      date1 = new Date(date1);
    }
    if (typeof date2 == "string") {
      date2 = new Date(date2);
    }
    const cal = (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);

    return cal;
  }

  const createThisWeek = () => {
    let empty = [];
    const today = new Date();
    const firstday = new Date(today.setDate(today.getDate() - today.getDay()));
    //const lastday = new Date(today.setDate(today.getDate() - today.getDay() + 6));

    for (let i = 0; i < watches.length; i++) {
      const differ = dateCompare(firstday, watches[i].date);
      if (differ < 1) {
        empty.push(watches[i]);
      }
    }
    setThisWeek(empty);
  };

  // This week array
  const weekBest = () => {
    createThisWeek();
    console.log(thisWeek); // you can use this var after render
    for (let i = 0; i < thisWeek.length - 1; i++) {
      if (thisWeek[i].time - thisWeek[i + 1].time > 0) {
        setMax(thisWeek[i].time);
      } else {
        setMax(thisWeek[i + 1].time);
      }
    }
    return "Hi!";
  };

  const monthBest = () => {};

  return (
    <>
      <h1>Statistics!</h1>
      <button onClick={weekBest}>BEST OF THE WEEK </button>
      <ul>
        {watches.map((item, i) => (
          <li key={i}>
            {item.date} : <Time time={item.time} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Stats;
