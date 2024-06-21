import React from "react";
import "./UserCard.css";
import usericon from "./assets/images/image-jeremy.png";

export default function () {
  const timeList = ["Daily", "Weekly", "Monthly"];

  return (
    <header>
      <div className="user-box">
        <img src={usericon} alt="" className="user-box__usericon" />
        <p className="user-box__statement">
          Report for
          <span className="user-box__statement__name"> Jeremy Robson </span>
        </p>
      </div>

      <div className="time-selector">
        {timeList.map((value, index) => (
          <React.Fragment key={value}>
            <input
              type="radio"
              className="time-selector__time"
              name="selected-time"
              id={value}
              value={value}
              defaultChecked={index === 0}
            />
            <label htmlFor={value}>{value}</label>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
