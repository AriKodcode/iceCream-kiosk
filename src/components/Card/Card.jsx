import './Card.css';
import { useState } from 'react';

export default function Card(props) {
  const [scoopsIce, setScoopsIce] = useState(0);
  const [error, setError] = useState('');

  function handleMinusClick() {
    setError('');
    if (scoopsIce > 0) {
      setScoopsIce(scoopsIce - 1);
    } else {
      setError('error');
    }
  }
  function handlePlusClick() {
    setError('');
    if (scoopsIce < 5) {
      setScoopsIce(scoopsIce + 1);
    } else {
      setError('you cant order more then 5 scoop');
    }
  }

  return (
    <div className="card">
      <h1>{props.name}</h1>
      <div className="card-buttons">
        <div>
          <button onClick={handleMinusClick}>-</button>
        </div>
        <p>{scoopsIce}</p>
        <div>
          <button onClick={handlePlusClick}>+</button>
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  );
}
