import React, { useState, useEffect, Fragment } from "react";
import "./index.css";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newHours = hours;
        let newMinutes = minutes;
        let newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes--;

          if (newMinutes < 0) {
            newMinutes = 59;
            newHours--;
          }
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  const timeUnits = [
    { label: "Hrs", value: formatTime(timeLeft.hours) },
    { label: "Min", value: formatTime(timeLeft.minutes) },
    { label: "Sec", value: formatTime(timeLeft.seconds) },
  ];

  return (
    <div className="time-container">
      <h2 className="timer-title">Existing Customer Deal Ending In 6 Hours</h2>
      <div className="timer-wrapper">
        {timeUnits?.map((unit, idx) => (
          <Fragment key={unit.label}>
            <div className="timer-box">
              <span className="timer-value">{unit.value}</span>
              <span className="timer-label">{unit.label}</span>
            </div>
            {idx < timeUnits.length - 1 && (
              <span className="time-divider">:</span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
