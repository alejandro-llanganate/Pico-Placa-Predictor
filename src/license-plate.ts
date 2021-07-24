import Validators from "./validators";

class LicensePlate {
    private _provinceLetter?: string;
    private _lastDigit?: number;
    private _fullPlate?: string;

    constructor(plate: string) {
        if (Validators.validateEcuadorianLicensePlate(plate)) {
            this._fullPlate = plate;
            this._provinceLetter = plate.charAt(0);
            this._lastDigit = parseInt(plate.charAt(plate.length - 1));
        }
    }

    get lastDigit() {
        return this._lastDigit;
    }

    get fullPlate() {
        return this._fullPlate;
    }
}