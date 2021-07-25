import { expect } from 'chai';
import LicensePlate from '../src/license-plate';
import PicoPlacaPredictor from '../src/pico-placa-predictor';
import picoYPlacaRules from '../src/resources/rules';
describe('PicoPlacaPredictor', () => {
    describe('PicoPlacaPredictor.isAuthorizedToCirculate()', () => {
        it('Should return true given a weekend day and a correct date and license plate', () => {
            const userPlate = new LicensePlate('PTO-0168');
            const predictor = new PicoPlacaPredictor(userPlate, picoYPlacaRules);
            expect(predictor.isAuthorizedToCirculate(new Date("2021-07-25"), "12:00")).to.equal(true);
        });
        it('Should return false given a day, time and last digit license plate inside the restrictions', () => {
            const userPlate = new LicensePlate('PTO-0162');
            const predictor = new PicoPlacaPredictor(userPlate, picoYPlacaRules);
            expect(predictor.isAuthorizedToCirculate(new Date("2021-07-19"), "08:00")).to.equal(false);
        });
    });
});
