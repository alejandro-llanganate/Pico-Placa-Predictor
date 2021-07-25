import Validators from "./validators";

class LicensePlate {
    private _provinceLetter?: string;
    private _lastDigit?: number;
    private _fullPlate?: string;

    constructor(userPlate: string) {
        if (Validators.validateEcuadorianLicensePlate(userPlate)) {
            this._fullPlate = userPlate;
            this._provinceLetter = userPlate.charAt(0);
            this._lastDigit = parseInt(userPlate.charAt(userPlate.length - 1));
        }
        else{
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

export default LicensePlate;