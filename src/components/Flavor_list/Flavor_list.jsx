import { useState } from 'react';
import 'Flavor_list.css';
import Card from '../Card/Card';
import iceCream from '../../../public/data.json';

export default function Flavor_list() {
  const [data, setdata] = useState(iceCream);
  
  return (
    <div>
        {data.map((obj)=>{
            return(<Card name={obj.name}  />)
        })}
      
    </div>
  );
}
