import weekDay from "./resources/days";

type hourRestriction = {
    initialHour: string,
    finalHour: string
}

interface CarCirculationRule {
    day: weekDay,
    hours: hourRestriction[],
    lastDigitPlate: number
}

export default CarCirculationRule;