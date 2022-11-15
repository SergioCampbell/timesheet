import React from "react";
import { indexDay, Schedule } from "../interface/interfaces";
import { Logic, calculateSalary } from "./Logic";

export default function Result({ username, startTime, endTime, startDate, endDate, dais }: Schedule) {
  const result = Logic(startDate, endDate);
  const payment = calculateSalary(dais, startTime, endTime)

  return (
    <>
      <div
        className="alert alert-primary d-flex align-items-center justify-content-center mt-5"
        role="alert"
      >
        <p>
          The user <strong>{ username }</strong> was worked{ " " }
          <strong>{ result < 0 || result > 0 ? result : 0 }</strong> hours and the paiment is: ${ payment } USD.
        </p>
      </div>
    </>
  );
}
