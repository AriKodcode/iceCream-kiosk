import 'Card.css';
import { useState } from 'react';

export default function Card(props) {
  const [scoopsIce, setScoopsIce] = useState(0);
  function minus() {
    if (scoopsIce > 0) {
      () => setScoopsIce(scoopsIce - 1);
    }
  }
  function plus() {
    if (scoopsIce < 5) {
      () => setScoopsIce(scoopsIce + 1);
    }
  }
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <div className="card-buttons">
        <button onClick={minus}>-</button>
        {scoopsIce}
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
}
