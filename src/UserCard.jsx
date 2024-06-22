import React from "react";
import "./UserCard.css";
import usericon from "./assets/images/image-jeremy.png";

export default function (prop) {
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
        {prop.timeList.map((value) => (
          <React.Fragment key={value}>
            <input
              type="radio"
              className="time-selector__time"
              name="selected-time"
              id={value}
              value={value}
              checked={prop.time === value}
              onChange={(e) => prop.setTime(e.target.value)}
            />
            <label htmlFor={value}>{value}</label>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
