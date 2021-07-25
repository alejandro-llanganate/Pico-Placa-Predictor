import { expect, assert } from 'chai';
import LicensePlate from '../src/license-plate';
describe('LicensePlate', () => {
    it('Should throw an error when trying to create an instance with a incorrect format license plate', () => {
        assert.throw(() => { new LicensePlate('PTOO-0168'); }, Error);
    });
    describe('LicensePlate.fullPlate', () => {
        it('Should return the full license plate after creating an instance of the class', () => {
            const userPlate = new LicensePlate('PTO-0168');
            expect(userPlate.fullPlate).to.equal('PTO-0168');
        });
    });
    describe('LicensePlate.lastDigit', () => {
        it('Should return the last digit of a correct license plate after creating an instance of the class', () => {
            const userPlate = new LicensePlate('PTO-0168');
            expect(userPlate.lastDigit).to.equal(8);
        });
    });
    describe('LicensePlate.provinceLetter', () => {
        it('Should return the province letter of a correct license plate after creating an instance of the class', () => {
            const userPlate = new LicensePlate('PTO-0168');
            expect(userPlate.provinceLetter).to.equal('P');
        });
    });
});
