import React, { useState } from "react";

function App() {
  var newTime;
  let time = new Date().toLocaleTimeString();

  const [getTime, setTime] = useState(time);

  function tellTime() {
    newTime = new Date().toLocaleTimeString();

    setTime(newTime);
  }
  setInterval(tellTime, 1000);

  return (
    <div className="container">
      <h1>{getTime}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
