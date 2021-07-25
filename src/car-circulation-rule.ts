type weekDay = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

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