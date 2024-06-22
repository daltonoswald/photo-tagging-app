import { useEffect, useState } from 'react'

export default function Timer({ time, setTime, timerOn }) {
    useEffect(() => {
        let intervalId;
        if (timerOn) {
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [timerOn, time]); 

      const hours = Math.floor(time / 360000);
      const minutes = Math.floor((time % 360000) / 6000);
      const seconds = Math.floor((time % 6000) / 100);
      const milliseconds = time % 100;

      return (
        <div className="timer">
                <p>
                    {hours}:{minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}:
                    {milliseconds.toString().padStart(2, "0")}
                </p>
        </div>
      )
}