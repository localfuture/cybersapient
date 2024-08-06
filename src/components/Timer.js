import React, { useEffect, useState } from 'react';

const Timer = ({ onTimeUp }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimeUp();
    }
  }, [seconds, onTimeUp]);

  return <div className="timer">Time left: {seconds}s</div>;
};

export default Timer;
