import React, { useState } from "react";
import FormBox from "./components/Formbox";
import Result from "./components/Result";
import { indexDay } from "./interface/interfaces";

export default function App() {
  const [startTime, setStartTime] = useState("");
  const [startTime1, setStartTime1] = useState("");
  const [startTime2, setStartTime2] = useState("");
  const [startTime3, setStartTime3] = useState("");
  const [startTime4, setStartTime4] = useState("");
  const [startTime5, setStartTime5] = useState("");
  const [startTime6, setStartTime6] = useState("");

  const [endTime, setEndTime] = useState("");
  const [endTime1, setEndTime1] = useState("");
  const [endTime2, setEndTime2] = useState("");
  const [endTime3, setEndTime3] = useState("");
  const [endTime4, setEndTime4] = useState("");
  const [endTime5, setEndTime5] = useState("");
  const [endTime6, setEndTime6] = useState("");

  const [username, setusername] = useState("");

  const [dais, setDais] = useState<indexDay>(indexDay.MO)
  const [dais1, setDais1] = useState<indexDay>(indexDay.TU)
  const [dais2, setDais2] = useState<indexDay>(indexDay.WE)
  const [dais3, setDais3] = useState<indexDay>(indexDay.TH)
  const [dais4, setDais4] = useState<indexDay>(indexDay.FR)
  const [dais5, setDais5] = useState<indexDay>(indexDay.SA)
  const [dais6, setDais6] = useState<indexDay>(indexDay.SU)

/* changes */
  const [sTimeHour, sTimeMin] = startTime.split(':')
  const [eTimeHour, eTimeMin] = endTime.split(':')

  const startDate = new Date(0, 0, 0, parseInt(sTimeHour), parseInt(sTimeMin), 0);
  const endDate = new Date(0, 0, 0, parseInt(eTimeHour), parseInt(eTimeMin), 0);

  const [sTimeHour1, sTimeMin1] = startTime1.split(':')
  const [eTimeHour1, eTimeMin1] = endTime1.split(':')

  const startDate1 = new Date(0, 0, 0, parseInt(sTimeHour1), parseInt(sTimeMin1), 0);
  const endDate1 = new Date(0, 0, 0, parseInt(eTimeHour1), parseInt(eTimeMin1), 0);

  const [sTimeHour2, sTimeMin2] = startTime2.split(':')
  const [eTimeHour2, eTimeMin2] = endTime2.split(':')

  const startDate2 = new Date(0, 0, 0, parseInt(sTimeHour2), parseInt(sTimeMin2), 0);
  const endDate2 = new Date(0, 0, 0, parseInt(eTimeHour2), parseInt(eTimeMin2), 0);

  const [sTimeHour3, sTimeMin3] = startTime3.split(':')
  const [eTimeHour3, eTimeMin3] = endTime3.split(':')

  const startDate3 = new Date(0, 0, 0, parseInt(sTimeHour3), parseInt(sTimeMin3), 0);
  const endDate3 = new Date(0, 0, 0, parseInt(eTimeHour3), parseInt(eTimeMin3), 0);

  const [sTimeHour4, sTimeMin4] = startTime4.split(':')
  const [eTimeHour4, eTimeMin4] = endTime4.split(':')

  const startDate4 = new Date(0, 0, 0, parseInt(sTimeHour4), parseInt(sTimeMin4), 0);
  const endDate4 = new Date(0, 0, 0, parseInt(eTimeHour4), parseInt(eTimeMin4), 0);

  const [sTimeHour5, sTimeMin5] = startTime5.split(':')
  const [eTimeHour5, eTimeMin5] = endTime5.split(':')

  const startDate5 = new Date(0, 0, 0, parseInt(sTimeHour5), parseInt(sTimeMin5), 0);
  const endDate5 = new Date(0, 0, 0, parseInt(eTimeHour5), parseInt(eTimeMin5), 0);

  const [sTimeHour6, sTimeMin6] = startTime6.split(':')
  const [eTimeHour6, eTimeMin6] = endTime6.split(':')

  const startDate6 = new Date(0, 0, 0, parseInt(sTimeHour6), parseInt(sTimeMin6), 0);
  const endDate6 = new Date(0, 0, 0, parseInt(eTimeHour6), parseInt(eTimeMin6), 0);

  const changeStart = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setStartTime(target.value);
  };
  const changeStart1 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setStartTime1(target.value);
  };

  const changeStart2 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setStartTime2(target.value);
  };

  const changeStart3 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setStartTime3(target.value);
  };

  const changeStart4 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setStartTime4(target.value);
  };

  const changeStart5 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setStartTime5(target.value);
  };

  const changeStart6 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setStartTime6(target.value);
  };

  const changeEnd = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setEndTime(target.value);
  };

  const changeEnd1 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setEndTime1(target.value);
  };

  const changeEnd2 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setEndTime2(target.value);
  };

  const changeEnd3 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setEndTime3(target.value);
  };

  const changeEnd4 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setEndTime4(target.value);
  };

  const changeEnd5 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setEndTime5(target.value);
  };

  const changeEnd6 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setEndTime6(target.value);
  };

  const changeUsername = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setusername(target.value);
  };

  const changeDais = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setDais(target.value as indexDay);
  };

  const changeDais1 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setDais1(target.value as indexDay);
  };

  const changeDais2 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setDais2(target.value as indexDay);
  };

  const changeDais3 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setDais3(target.value as indexDay);
  };

  const changeDais4 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setDais4(target.value as indexDay);
  };

  const changeDais5 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setDais5(target.value as indexDay);
  };

  const changeDais6 = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    setDais6(target.value as indexDay);
  };

  //alert box
  const [isVisible, setIsVisible] = useState(false)

  const answer = (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsVisible(true)
    
  }

  return (
    <div className="container text-center bg-gradient">
      <h3 className="display-5">Employee Timesheet</h3>
      <form className="form-control bg-secondary bg-gradient text-white" onSubmit={answer}>
        <div className="col">
        <div className="col">
            <label htmlFor="username" className="form-label">
              Type your username
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="Fuancho"
              value={username}
              onChange={changeUsername}
            />
          </div>
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
        <FormBox
          startTime={startTime1}
          changeStart={changeStart1}
          endTime={endTime1}
          changeEnd={changeEnd1}
          changeDais={changeDais1}
          dais={dais1}
        />
        <FormBox
          startTime={startTime2}
          changeStart={changeStart2}
          endTime={endTime2}
          changeEnd={changeEnd2}
          changeDais={changeDais2}
          dais={dais2}
        />
        <FormBox
          startTime={startTime3}
          changeStart={changeStart3}
          endTime={endTime3}
          changeEnd={changeEnd3}
          changeDais={changeDais3}
          dais={dais3}
        />
        <FormBox
          startTime={startTime4}
          changeStart={changeStart4}
          endTime={endTime4}
          changeEnd={changeEnd4}
          changeDais={changeDais4}
          dais={dais4}
        />
        <FormBox
          startTime={startTime5}
          changeStart={changeStart5}
          endTime={endTime5}
          changeEnd={changeEnd5}
          changeDais={changeDais5}
          dais={dais5}
        />
        <FormBox
          startTime={startTime6}
          changeStart={changeStart6}
          endTime={endTime6}
          changeEnd={changeEnd6}
          changeDais={changeDais6}
          dais={dais6}
        />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-dark mt-3 mb-3" onClick={() => isVisible !== isVisible}>Submit</button>
        </div>
      </form>

      {isVisible === true ? 
      (<Result
        username={username} 
        dais={dais}
        startTime={startTime} 
        endTime={endTime} 
        startDate={startDate} 
        endDate={endDate} 
        startTime1={startTime1} 
        endTime1={endTime1} 
        startDate1={startDate1} 
        endDate1={endDate1} 
        startTime2={startTime2} 
        endTime2={endTime2} 
        startDate2={startDate2} 
        endDate2={endDate2} 
        startTime3={startTime3} 
        endTime3={endTime3} 
        startDate3={startDate3} 
        endDate3={endDate3}
        startTime4={startTime4} 
        endTime4={endTime4} 
        startDate4={startDate4} 
        endDate4={endDate4}
        startTime5={startTime5} 
        endTime5={endTime5} 
        startDate5={startDate5} 
        endDate5={endDate5}
        startTime6={startTime6} 
        endTime6={endTime6} 
        startDate6={startDate6} 
        endDate6={endDate6}
        answer={answer}
        />) : ''}
    

    </div>
  );
}
