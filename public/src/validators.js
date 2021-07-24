"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const provinces_1 = __importDefault(require("./resources/provinces"));
class Validators {
    static validateEcuadorianLicensePlate(plateNumber) {
        const regexFormat = /^[A-Z]{3}-?[0-9]{3,4}$/g;
        if (!regexFormat) {
            return false;
        }
        const firstLetter = plateNumber.charAt(0);
        const firstLetterCorrect = Object.keys(provinces_1.default).find((letter) => letter === firstLetter);
        if (!firstLetterCorrect) {
            return false;
        }
        return true;
    }
}
exports.default = Validators;
