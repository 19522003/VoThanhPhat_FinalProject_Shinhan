import { useEffect } from "react";
import { useState } from "react";

function useClock() {
  const [timeString, setTimeString] = useState();

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date().toString();

      setTimeString(now);
      console.log(timeString);
    }, 1000);
    return () => {
      // cleanup
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
