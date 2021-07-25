import RestrictionCirculationRule from "../restriction-circulation-rule";
import weekDay from "./days";
import validateHour from "./time";

const intervals = {
    moorning: {
        initialHour: validateHour("07:00"),
        finalHour: validateHour("09:30")
    },
    afternoon: {
        initialHour: validateHour("16:00"),
        finalHour:validateHour("19:30")
    }
}

const digitsPlates = {
    monday: [1,2],
    tuesday: [3,4],
    wednesday: [5,6],
    thursday: [7,8],
    friday: [9,0]
}

let picoYPlacaRules: RestrictionCirculationRule[] = [
    {
        day: weekDay.MONDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.monday
    },
    {
        day: weekDay.TUESDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.tuesday
    },
    {
        day: weekDay.WEDNESDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.wednesday
    },
    {
        day: weekDay.THURSDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.thursday
    },
    {
        day: weekDay.FRIDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.friday
    },
]


export default picoYPlacaRules;