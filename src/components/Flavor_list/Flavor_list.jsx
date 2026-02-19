import { useState } from 'react';
import './Flavor_list.css';
import Card from '../Card/Card';
import iceCream from '../../../public/data.json';

export default function Flavor_list() {
  const [data, setdata] = useState(iceCream);

  return (
    <div className="flavors">
      {data.map((obj) => {
        if (!obj.isSoldOut) {
          return <Card key={obj.name} name={obj.name} />;
        }
      })}
    </div>
  );
}
