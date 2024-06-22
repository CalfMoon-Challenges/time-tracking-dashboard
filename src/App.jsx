import { useState } from "react";

import MainBody from "./MainBody";
import UserCard from "./UserCard";

export default function () {
  const timeList = ["daily", "weekly", "monthly"];
  const [time, setTime] = useState(timeList[0]);

  return (
    <>
      <UserCard time={time} setTime={setTime} timeList={timeList} />
      <MainBody time={time} setTime={setTime} timeList={timeList} />
    </>
  );
}
