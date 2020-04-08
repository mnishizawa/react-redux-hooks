import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Line } from "react-chartjs-2";
import { getData } from "./actions/bitcoinActions";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.bitcoin);
  const [numberx, setNumber] = useState(15);

  const fetchData = time => {
    dispatch(getData({ time: time, number: numberx }));
  };

  console.log("state", state);

  return (
    <div className="App">
      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData("1min")}>1 min</button>
        <button onClick={() => fetchData("5min")}>5 min</button>
        <button onClick={() => fetchData("15min")}>15 min</button>

        <input onChange={e => setNumber(e.target.value)} />
        {state.loading && <p>Loading...</p>}
      </div>
      <div className={"chart-wrapper"}>
        <Line data={state} />
      </div>
    </div>
  );
}
