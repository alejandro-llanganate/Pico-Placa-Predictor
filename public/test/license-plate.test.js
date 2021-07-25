"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const license_plate_1 = __importDefault(require("../src/license-plate"));
describe('LicensePlate', () => {
    it('Should throw an error when trying to create an instance with a incorrect format license plate', () => {
        chai_1.assert.throw(() => { new license_plate_1.default('PTOO-0168'); }, Error);
    });
    describe('LicensePlate.fullPlate', () => {
        it('Should return the full license plate after creating an instance of the class', () => {
            const userPlate = new license_plate_1.default('PTO-0168');
            chai_1.expect(userPlate.fullPlate).to.equal('PTO-0168');
        });
    });
    describe('LicensePlate.lastDigit', () => {
        it('Should return the last digit of a correct license plate after creating an instance of the class', () => {
            const userPlate = new license_plate_1.default('PTO-0168');
            chai_1.expect(userPlate.lastDigit).to.equal(8);
        });
    });
    describe('LicensePlate.provinceLetter', () => {
        it('Should return the province letter of a correct license plate after creating an instance of the class', () => {
            const userPlate = new license_plate_1.default('PTO-0168');
            chai_1.expect(userPlate.provinceLetter).to.equal('P');
        });
    });
});
