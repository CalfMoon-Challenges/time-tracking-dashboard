import "./MainBody.css";
import data from "./assets/data.json";
import Icons from "./IconIndex";
import ellipsis from "./assets/images/icon-ellipsis.svg";

export default function (props) {
  const selectedTime = props.time;
  const lyToNormal = {
    // this is used to convert daily to weekly etc
    daily: "day",
    weekly: "week",
    monthly: "month",
  };

  return (
    <main>
      {data.map((value, index) => (
        <div className={`activity activity--${index}`} key={index}>
          <div className="activity__icon">
            <img src={Icons[value.title]} alt="" />
          </div>

          <div className="activity__details">
            <div className="activity__details__top">
              <span className="activity__details__top__title">
                {value.title}
              </span>
              <span className="activity__details__top__menu">
                <img src={ellipsis} alt="" />
              </span>
            </div>

            <div className="activity__details__time">
              <span className="activity__details__time__current">
                {value.timeframes[selectedTime].current}hrs
              </span>
              <span className="activity__details__time__previous">
                Last {lyToNormal[selectedTime]} -{" "}
                {value.timeframes[selectedTime].previous}hrs
              </span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
