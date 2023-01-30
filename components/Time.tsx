import { useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date().toDateString());

  return (
    <div>
      <h2 className="py-4 text-xs text-gray-500">{date}</h2>
    </div>
  );
};

export default Time;
