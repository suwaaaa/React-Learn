import { useRef, useEffect } from "react";

const H10 = () => {
  const timer = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("timer task");
    }, 1000);
  }, []);
  const clearTimer = () => {
    clearInterval(timer.current);
  };
  return (
    <>
      <button onClick={clearTimer}>清除</button>
    </>
  );
};

export default H10;
