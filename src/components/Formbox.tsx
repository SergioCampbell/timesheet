import React, { ChangeEventHandler, useState } from "react";
import { indexDay, Schedule } from "../interface/interfaces";

const FormBox: React.FC<Schedule> = ({
  startTime,
  endTime,
  username,
  changeStart,
  changeEnd,
  changeUsername,
  dais,
  changeDais
}) => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <label htmlFor="username" className="form-label">
              Type your username
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={changeUsername}
            />
          </div>

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

          <div className="col">
            <label htmlFor="startTime" className="form-label">
              Start time
            </label>
            <input
              className="form-control"
              type="time"
              name="startTime"
              id="startTime"
              value={startTime}
              onChange={changeStart}
            />
          </div>

          <div className="col">
            <label htmlFor="endTime" className="form-label">
              End time
            </label>
            <input
              className="form-control"
              type="time"
              name="endTime"
              id="endTime"
              value={endTime}
              onChange={changeEnd}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBox;
