"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const days_1 = __importDefault(require("../src/resources/days"));
const time_1 = __importDefault(require("../src/resources/time"));
describe('CarCirculationRule', () => {
    it('Should create an object based on the CarCirculationRule interface given a correct input', () => {
        let rule = {
            day: days_1.default.MONDAY,
            hours: [
                {
                    initialHour: time_1.default("12:45"),
                    finalHour: time_1.default("18:45"),
                }
            ],
            lastDigitsLicensePlate: [9]
        };
        chai_1.expect(rule).not.equal(null);
    });
    it('Should throw an error when trying to create an object with a incorrect format hour', () => {
        chai_1.assert.throw(() => {
            let rule = {
                day: days_1.default.MONDAY,
                hours: [
                    {
                        initialHour: time_1.default("12:45"),
                        finalHour: time_1.default("25:45"),
                    }
                ],
                lastDigitsLicensePlate: [9]
            };
            return rule;
        }, Error);
    });
});
