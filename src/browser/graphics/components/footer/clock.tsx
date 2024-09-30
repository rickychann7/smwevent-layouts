import React, { useEffect, useState } from 'react';

export const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  const formatTime = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(formatTime(now));
    };

    updateClock();

    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
};
