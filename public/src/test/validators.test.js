import Validators from "../src/validators";
import { expect } from 'chai';
describe('Validators.validateEcuadorianLicensePlate()', () => {
    it('Should return true for a correct ecuadorian license plate of 3 letters and 3 numbers', () => {
        const plateNumber = "ABC-123";
        expect(Validators.validateEcuadorianLicensePlate(plateNumber)).to.equal(true);
    });
    it('Should return true for a correct ecuadorian license plate of 3 letters and 4 numbers', () => {
        const plateNumber = "ABC-1234";
        expect(Validators.validateEcuadorianLicensePlate(plateNumber)).to.equal(true);
    });
    it('Should return false for a incorrect ecuadorian license plate because of its format', () => {
        const plateNumber = "123-ABC";
        expect(Validators.validateEcuadorianLicensePlate(plateNumber)).to.equal(false);
    });
    it('Should return false for a incorrect ecuadorian license plate number because of its first letter', () => {
        const plateNumber = "DBC-123";
        expect(Validators.validateEcuadorianLicensePlate(plateNumber)).to.equal(false);
    });
    it('Should return false for a empty string', () => {
        const plateNumber = "";
        expect(Validators.validateEcuadorianLicensePlate(plateNumber)).to.equal(false);
    });
});
describe('Validators.validateTime()', () => {
    it('Should return true for a correct time format', () => {
        const time1 = "14:12";
        expect(Validators.validateTime(time1)).to.equal(true);
    });
    it('Should return false for a incorrect time format', () => {
        const time = "29:12";
        expect(Validators.validateTime(time)).to.equal(false);
    });
    it('Should return false for a empty string', () => {
        const time = "";
        expect(Validators.validateTime(time)).to.equal(false);
    });
});
