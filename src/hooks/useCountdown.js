import { useEffect, useState } from "react";
import { EVENT_DATETIME_ISO } from "../utils/constants";

function getTimeRemaining(targetDate) {
  const total = new Date(targetDate).getTime() - Date.now();

  if (Number.isNaN(total)) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalPositive = Math.max(total, 0);

  const seconds = Math.floor((totalPositive / 1000) % 60);
  const minutes = Math.floor((totalPositive / 1000 / 60) % 60);
  const hours = Math.floor((totalPositive / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalPositive / (1000 * 60 * 60 * 24));

  return {
    total: totalPositive,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function useCountdown(targetDate = EVENT_DATETIME_ISO) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const isCompleted = timeLeft.total <= 0;

  return { ...timeLeft, isCompleted };
}
