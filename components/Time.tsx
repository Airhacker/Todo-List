import { useState } from "react";

const Time = (props) => {
  const [date, setDate] = useState(new Date().toDateString());

  return (
    <div>
      <h2
        className={`py-4 text-xs ${
          props.background ? "text-gray-500" : "text-gray-700"
        }`}
      >
        {date}
      </h2>
    </div>
  );
};

export default Time;
