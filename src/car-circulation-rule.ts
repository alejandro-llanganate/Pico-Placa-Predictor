import weekDay from "./resources/days";

type hourRestriction = {
    initialHour: Date,
    finalHour: Date
}

interface CarCirculationRule {
    day: weekDay,
    hours: hourRestriction[],
    lastDigitPlate: number
}

export default CarCirculationRule;