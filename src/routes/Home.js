import React, { useState } from "react";
import Stopwatch from "../components/Stopwatch";

const Home = () => {
  const [watch, setwatch] = useState([]);

  const addWatch = (event) => {
    setwatch(watch.concat(<Stopwatch key={watch.length} />));
  };

  return (
    <>
      <main>
        <section className="home">
          <div className="wathes">
            <Stopwatch />
          </div>
          <div>
            <button onClick={addWatch}>+</button>
            {watch}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
