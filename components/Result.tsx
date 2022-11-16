import React from "react";
import { Schedule, indexDay } from "../interface/interfaces";
import { Logic, calculateSalary } from "./Logic";

export default function Result({
  username,
  startTime,
  startTime1,
  startTime2,
  startTime3,
  startTime4,
  startTime5,
  startTime6,
  endTime,
  endTime1,
  endTime2,
  endTime3,
  endTime4,
  endTime5,
  endTime6,
  startDate,
  endDate,
  startDate1,
  endDate1,
  startDate2,
  endDate2,
  startDate3,
  endDate3,
  startDate4,
  endDate4,
  startDate5,
  endDate5,
  startDate6,
  endDate6,
  answer
}: Schedule) {
  let dayWorked = Logic(startDate, endDate);
  let dayWorked1 = Logic(startDate1, endDate1);
  let dayWorked2 = Logic(startDate2, endDate2);
  let dayWorked3 = Logic(startDate3, endDate3);
  let dayWorked4 = Logic(startDate4, endDate4);
  let dayWorked5 = Logic(startDate5, endDate5);
  let dayWorked6 = Logic(startDate6, endDate6);

  const payment = calculateSalary(indexDay.MO, startTime, endTime);
  const payment1 = calculateSalary(indexDay.TU, startTime1, endTime1);
  const payment2 = calculateSalary(indexDay.WE, startTime2, endTime2);
  const payment3 = calculateSalary(indexDay.TH, startTime3, endTime3);
  const payment4 = calculateSalary(indexDay.FR, startTime4, endTime4);
  const payment5 = calculateSalary(indexDay.SA, startTime5, endTime5);
  const payment6 = calculateSalary(indexDay.SU, startTime6, endTime6);
  
  
  if( isNaN(dayWorked) == true) dayWorked = 0
  if( isNaN(dayWorked1) == true ) dayWorked1 = 0
  if( isNaN(dayWorked2) == true ) dayWorked2 = 0
  if( isNaN(dayWorked3) == true ) dayWorked3 = 0
  if( isNaN(dayWorked4) == true ) dayWorked4 = 0
  if( isNaN(dayWorked5) == true ) dayWorked5 = 0
  if( isNaN(dayWorked6) == true ) dayWorked6 = 0
  
  const result = (dayWorked + dayWorked1 + dayWorked2 + dayWorked3 + dayWorked4 + dayWorked5 + dayWorked6);

  let sum = (payment + payment1  + payment2 + payment3 + payment4 + payment5 + payment6)

  return (
    <div
    className="alert alert-primary d-flex align-items-center justify-content-center mt-3 bg-dark bg-gradient"
    role="alert">
      <p className="text-white">
      The user <strong>{username}</strong> was worked{" "}
      <strong>{result < 0 || result > 0 ? result : 0}</strong> hours and the
      payment is: <strong>${sum} USD.</strong>
    </p>
  </div>
  );
}
