export interface Schedule {
    hour?: number,
    minutes?: number,
    dais?: indexDay,
    username?: string,
    startTime?: string,
    endTime?: string,
    startDate?: Date,
    endDate?: Date,
    diff?: number,
    changeStart?: any,
    changeEnd?: any,
    changeUsername?: any,
    changeDais?: any

}

export enum indexDay {
    MO = "monday",
    TU = "tuesday",
    WE = "wednesday",
    TH = "thursday",
    FR = "friday",
    SA = "saturday",
    SU = "sunday"
}