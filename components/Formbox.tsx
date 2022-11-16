import React from "react";
import { indexDay, Schedule } from "../interface/interfaces";
import InputTime from "./InputTime";

const FormBox: React.FC<Schedule> = ({
  startTime,
  endTime,
  changeStart,
  changeEnd,
  dais,
  changeDais
}) => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <label htmlFor="scheduleDay" className="form-label">
              Schedule day
            </label>
            <select
              className="form-select"
              name="scheduleDay"
              id="scheduleDay"
              value={dais}
              onChange={changeDais}
            >
                <option value={indexDay.MO}>{indexDay.MO}</option>
                <option value={indexDay.TU}>{indexDay.TU}</option>
                <option value={indexDay.WE}>{indexDay.WE}</option>
                <option value={indexDay.TH}>{indexDay.TH}</option>
                <option value={indexDay.FR}>{indexDay.FR}</option>
                <option value={indexDay.SA}>{indexDay.SA}</option>
                <option value={indexDay.SU}>{indexDay.SU}</option>
            </select>
          </div>

          <InputTime startTime={startTime} changeStart={changeStart} endTime={endTime} changeEnd={changeEnd} />
        </div>
      </div>
    </>
  );
};

export default FormBox;
