"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const days_1 = __importDefault(require("./days"));
const time_1 = __importDefault(require("./time"));
const intervals = {
    moorning: {
        initialHour: time_1.default("07:00"),
        finalHour: time_1.default("09:30")
    },
    afternoon: {
        initialHour: time_1.default("16:00"),
        finalHour: time_1.default("19:30")
    }
};
const digitsPlates = {
    monday: [1, 2],
    tuesday: [3, 4],
    wednesday: [5, 6],
    thursday: [7, 8],
    friday: [9, 0]
};
let picoYPlacaRules = [
    {
        day: days_1.default.MONDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.monday
    },
    {
        day: days_1.default.TUESDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.tuesday
    },
    {
        day: days_1.default.WEDNESDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.wednesday
    },
    {
        day: days_1.default.THURSDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.thursday
    },
    {
        day: days_1.default.FRIDAY,
        hours: [
            intervals.moorning,
            intervals.afternoon
        ],
        lastDigitsLicensePlate: digitsPlates.friday
    },
];
exports.default = picoYPlacaRules;
