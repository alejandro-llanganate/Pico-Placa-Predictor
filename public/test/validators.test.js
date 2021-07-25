"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = __importDefault(require("../src/validators"));
const chai_1 = require("chai");
describe('Validators.validateEcuadorianLicensePlate()', () => {
    it('Should return true for a correct ecuadorian license plate of 3 letters and 3 numbers', () => {
        const plateNumber = "ABC-123";
        chai_1.expect(validators_1.default.validateEcuadorianLicensePlate(plateNumber)).to.equal(true);
    });
    it('Should return true for a correct ecuadorian license plate of 3 letters and 4 numbers', () => {
        const plateNumber = "ABC-1234";
        chai_1.expect(validators_1.default.validateEcuadorianLicensePlate(plateNumber)).to.equal(true);
    });
    it('Should return false for a incorrect ecuadorian license plate because of its format', () => {
        const plateNumber = "123-ABC";
        chai_1.expect(validators_1.default.validateEcuadorianLicensePlate(plateNumber)).to.equal(false);
    });
    it('Should return false for a incorrect ecuadorian license plate number because of its first letter', () => {
        const plateNumber = "DBC-123";
        chai_1.expect(validators_1.default.validateEcuadorianLicensePlate(plateNumber)).to.equal(false);
    });
    it('Should return false for a empty string', () => {
        const plateNumber = "";
        chai_1.expect(validators_1.default.validateEcuadorianLicensePlate(plateNumber)).to.equal(false);
    });
});
describe('Validators.validateTime()', () => {
    it('Should return true for a correct time format', () => {
        const time1 = "14:12";
        chai_1.expect(validators_1.default.validateTime(time1)).to.equal(true);
    });
    it('Should return false for a incorrect time format', () => {
        const time = "29:12";
        chai_1.expect(validators_1.default.validateTime(time)).to.equal(false);
    });
    it('Should return false for a empty string', () => {
        const time = "";
        chai_1.expect(validators_1.default.validateTime(time)).to.equal(false);
    });
});
