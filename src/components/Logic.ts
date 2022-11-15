import { indexDay } from "../interface/interfaces";


export function Logic(startDate: Date, endDate: Date) {
    let diff = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);

    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / 1000 / 60);

    console.log(`diff is ${hours} hours and ${minutes} minutes😇`)

    return hours;
}


export function calculateSalary(scheduleDay: string, startTime: string, endTime: string){
    const [sTimeHour, sTimeMin] = startTime.split(':')
    const [eTimeHour, eTimeMin] = endTime.split(':')

    const startDate = new Date(0, 0, 0, parseInt(sTimeHour), parseInt(sTimeMin), 0);
    const endDate = new Date(0, 0, 0, parseInt(eTimeHour), parseInt(eTimeMin), 0);

    const hours = Logic(startDate, endDate)

    console.log(scheduleDay, hours)
    
    let aux = startDate;
    let algo = 0;
    for(let hour = 0; hour < hours; hour++){
        aux = new Date(aux);
        if(hour > 0){
            aux. setHours(aux. getHours()+1);
        }
        let hora = aux.getHours()
        console.log('-------', hora)
        if(hora >= 0 && hora < 9) algo += 25
        if(hora >= 9 && hora <= 18) algo += 15
        if(hora >= 18) algo += 20
        if(scheduleDay === indexDay.SA || scheduleDay === indexDay.SU ) algo += 5
        
    }

    console.log(`Has to pay $${algo} to the user for work on ${scheduleDay}`)

    return algo
}