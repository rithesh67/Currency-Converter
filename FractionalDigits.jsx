import { useState } from "react";
import "./index.css";
import { incrementByAmount } from "./features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function FractionalDigits() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const [digits, setDigits] = useState(count);
  function changeDigits(event) {
    console.log(event.target.value);
    // setDigits(event.target.value);
    dispatch(incrementByAmount(event.target.value));
  }
  return (
    <div className="Fractions">
      <select value={count} onChange={changeDigits}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
}
