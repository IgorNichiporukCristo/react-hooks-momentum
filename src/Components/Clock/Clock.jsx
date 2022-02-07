import React,{ useState, useEffect } from 'react';
import "./clock.scss";

const Clock = () => {
  console.log("clock")
  const [date, setDate] = useState(new Date());
  
  
  useEffect(() => {
    const timerId = setInterval(() => {setDate(new Date())}, 1000);
    return () => {
      clearInterval(timerId);
    } 
  }, []);

  return (
    <div  className='clock-block'>
      <span className='clock-block__clock'>{date.toLocaleTimeString()}</span> 
    </div>
  );
}
export default Clock;