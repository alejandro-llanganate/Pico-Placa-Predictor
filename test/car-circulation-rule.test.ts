import { expect, assert } from 'chai'

import CarCirculationRule from '../src/car-circulation-rule';
import weekDay from '../src/resources/days'
import setTime from '../src/resources/time';
describe('CarCirculationRule', () => {
    it('Should create an object based on the CarCirculationRule interface given a correct input', () => {
        let rule: CarCirculationRule = {
            day: weekDay.MONDAY,
            hours: [
                {
                    initialHour: setTime("12:45"),
                    finalHour: setTime("18:45"),
                }
            ],
            lastDigitPlate: 9
        }
        expect(rule).not.equal(null)
    })

    it('Should throw an error when trying to create an object with a incorrect format hour', () => {
        assert.throw(() => {
            let rule: CarCirculationRule = {
                day: weekDay.MONDAY,
                hours: [
                    {
                        initialHour: setTime("12:45"),
                        finalHour: setTime("25:45"),
                    }
                ],
                lastDigitPlate: 9
            }
            return rule;
        }, Error);
    })
});