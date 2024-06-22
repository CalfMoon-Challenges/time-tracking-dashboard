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
        <div className="activity" key={index}>
          <div className="activity__icon">
            <img src={Icons[value.title]} alt="" />
          </div>

          <div className="activity__details">
            <div className="activity__deatils__top">
              <div className="activity__deatils__top__title">{value.title}</div>
              <div className="activity__deatils__top__menu">
                <img src={ellipsis} alt="" />
              </div>
            </div>

            <div className="activity__deatils__time">
              <span className="activity__details__time__current">
                {value.timeframes[selectedTime].current}hrs
              </span>
              <span className="activity__details__time__previous">
                Last {lyToNormal[selectedTime]} -
                {value.timeframes[selectedTime].previous}hrs
              </span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
