import React from "react";
import { indexDay, Schedule } from "../interface/interfaces";
import InputTime from "./InputTime";

const FormBox: React.FC<Schedule> = ({
  startTime,
  endTime,
  changeStart,
  changeEnd,
  dais,
}) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col col-md-2 col-12">
            <p className="fw-bolder fs-3 mt-4">{dais}</p>
          </div>

          <InputTime
            startTime={startTime}
            changeStart={changeStart}
            endTime={endTime}
            changeEnd={changeEnd}
          />
        </div>
      </div>
    </>
  );
};

export default FormBox;
