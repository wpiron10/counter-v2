// import de mes fichiers et composants

import "./App.css";
import { useState } from "react";
import logo from "./assets/img/logo.png";

function App() {
  // je déclare ma state counter
  const [counters, setCounters] = useState([0]);

  return (
    <div className="App">
      <nav>
        <div className="logo-box">
          <img src={logo} alt="logo" />
          <h1>React Counter v2</h1>
        </div>
      </nav>

      {counters.map((counter, index) => {
        console.log(counter);
        return (
          <div key={index} className="content">
            <button
              onClick={() => {
                let counterLess = [...counters];

                counterLess[index] -= 1;
                setCounters(counterLess);
              }}
            >
              -
            </button>
            <div>{counter}</div>
            <button
              onClick={() => {
                let newcounter = [...counters];
                newcounter.push(counter);
                setCounters(newcounter);
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                let counterMore = [...counters];

                counterMore[index] += 1;
                setCounters(counterMore);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let counterReset = [...counters];
                console.log(counter[index]);

                counterReset[index] = 0;
                setCounters(counterReset);
              }}
            >
              RESET
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
