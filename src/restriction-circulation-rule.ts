import weekDay from "./resources/days";

type hourRestriction = {
    initialHour: string,
    finalHour: string
}

interface RestrictionCirculationRule {
    day: weekDay,
    hours: hourRestriction[],
    lastDigitsLicensePlate: number[]
}

export default RestrictionCirculationRule;