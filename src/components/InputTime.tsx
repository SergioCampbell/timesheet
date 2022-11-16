import React from 'react'
import { Schedule } from '../interface/interfaces'

export default function InputTime({startTime, changeStart, endTime, changeEnd}: Schedule) {
    
    return (
    <>
        <div className="col col-lg-4 col-sm-12">
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

          <div className="col col-lg-4 col-sm-12">
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
    </>
    )
}