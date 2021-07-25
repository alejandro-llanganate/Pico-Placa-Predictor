"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = __importDefault(require("./validators"));
class LicensePlate {
    constructor(userPlate) {
        if (validators_1.default.validateEcuadorianLicensePlate(userPlate)) {
            this._fullPlate = userPlate;
            this._provinceLetter = userPlate.charAt(0);
            this._lastDigit = parseInt(userPlate.charAt(userPlate.length - 1));
        }
        else {
            throw new Error(`Imposible to create a license plate instance because the plate given ${userPlate} is not valid`);
        }
    }
    get provinceLetter() {
        return this._provinceLetter;
    }
    get lastDigit() {
        return this._lastDigit;
    }
    get fullPlate() {
        return this._fullPlate;
    }
}
exports.default = LicensePlate;
