import { expect, assert } from 'chai';
import weekDay from '../src/resources/days';
import validateHour from '../src/resources/time';
describe('CarCirculationRule', () => {
    it('Should create an object based on the CarCirculationRule interface given a correct input', () => {
        let rule = {
            day: weekDay.MONDAY,
            hours: [
                {
                    initialHour: validateHour("12:45"),
                    finalHour: validateHour("18:45"),
                }
            ],
            lastDigitsLicensePlate: [9]
        };
        expect(rule).not.equal(null);
    });
    it('Should throw an error when trying to create an object with a incorrect format hour', () => {
        assert.throw(() => {
            let rule = {
                day: weekDay.MONDAY,
                hours: [
                    {
                        initialHour: validateHour("12:45"),
                        finalHour: validateHour("25:45"),
                    }
                ],
                lastDigitsLicensePlate: [9]
            };
            return rule;
        }, Error);
    });
});
