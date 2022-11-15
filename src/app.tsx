import React, { useState } from "react";
import FormBox from "./components/Formbox";
import Result from "./components/Result";
import { indexDay } from "./interface/interfaces";

export default function App() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [username, setusername] = useState("");
  const [dais, setDais] = useState<indexDay>(indexDay.MO)

  const [sTimeHour, sTimeMin] = startTime.split(':')
  const [eTimeHour, eTimeMin] = endTime.split(':')

  const startDate = new Date(0, 0, 0, parseInt(sTimeHour), parseInt(sTimeMin), 0);
  const endDate = new Date(0, 0, 0, parseInt(eTimeHour), parseInt(eTimeMin), 0);

  const changeStart = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    console.log(target.value);
    setStartTime(target.value);
  };

  const changeEnd = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    console.log(target.value);
    setEndTime(target.value);
  };

  const changeUsername = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    console.log(target.value);
    setusername(target.value);
  };

  const changeDais = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    console.log(target.value);
    setDais(target.value as indexDay);
  };

  return (
    <div className="container mt-3 text-center">
      <h3 className="display-5">Employee Timesheet</h3>
      <hr />
      <form className="form-control">
        <FormBox
          startTime={startTime}
          changeStart={changeStart}
          endTime={endTime}
          changeEnd={changeEnd}
          username={username}
          changeUsername={changeUsername}
          changeDais={changeDais}
          dais={dais}
        />
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-secondary mt-3 mb-3">Submit</button>
        </div>
      </form>

      <Result username={username} startTime={startTime} endTime={endTime} startDate={startDate} endDate={endDate} dais={dais}/>
    </div>
  );
}
