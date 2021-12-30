import React,{ useState, useEffect } from 'react';
import "./clock.scss";

function Clock(){
  const [date, setDate] = useState(new Date());
  
  
  useEffect(() => {
    const timerId = setInterval(
      () => {setDate(new Date())}
      , 1000);
    return () => {
      clearInterval(timerId);
    } 
  }, []);

  return (
    <div  className='clock-block'>
     <span>{date.toLocaleTimeString()}</span> 
    </div>
  );
}
export default Clock;