import "./MainBody.css";
import "./MainBodyResponse.css";
import data from "./assets/data.json";
import Icons from "./IconIndex";
import ellipsis from "./assets/images/icon-ellipsis.svg";

export default function (props) {
  const selectedTime = props.time;
  const lyToNormal = {
    // this is used to convert daily to Day, weekly to Week etc
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
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
              <button
                className="activity__details__top__menu"
                aria-label="menu-for-activity"
              >
                <img src={ellipsis} alt="" />
              </button>
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
