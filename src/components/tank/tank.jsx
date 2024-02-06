import React, { useRef } from "react";
import "./tank.css";

const Tank = ({ waterLevel, addWater, emptyTank, setIsBalancing }) => {
    const interval = useRef(null)

  const handleMouseDown = () => {
    setIsBalancing(false)
    addWater()
    interval.current = setInterval(addWater, 1000);
    console.log("mouse down")
  };

  const handleMouseUp = () => {
    clearInterval(interval.current)
    setTimeout(() => setIsBalancing(true),1000)
    console.log("mouse up")
  }

  const handleEmptyTank = () => {
    setIsBalancing(false)
    emptyTank()
  }
  return (
    <div className="tank-container">
      <button className="add-btn" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        Add
      </button>
      <button className="empty-btn" onMouseDown={handleEmptyTank} onMouseUp={() => setTimeout(() => setIsBalancing(true),1000)}>
        Empty
      </button>
      <div className="tank">
        <div
          className="water"
          style={{ height: `${waterLevel * 100 / 1000}%` }}
        ></div>
      </div>
      <p>{waterLevel}L</p>
    </div>
  );
};

export default Tank;
