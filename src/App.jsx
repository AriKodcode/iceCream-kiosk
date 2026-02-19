import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Flavor_list from './components/Flavor_list/Flavor_list';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <Header />
      <div className="main">
        <Flavor_list />
      </div>
    </div>
  );
}

export default App;
