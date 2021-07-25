import RestrictionCirculationRule from "./restriction-circulation-rule";
import LicensePlate from "./license-plate";

class PicoPlacaPredictor {
    private _licensePlate: LicensePlate;
    private _rules: RestrictionCirculationRule[];

    constructor(licensePlate: LicensePlate, restrictions: RestrictionCirculationRule[]) {
        this._licensePlate = licensePlate;
        this._rules = restrictions;
    }

    // this function only return true if the license plate is not restricted
    isAuthorizedToCirculate(date: Date, hour: string): boolean {
        const dayNumber = date.getDay() + 1;
        let resultRule = this._rules.find(restriction =>
            restriction.day === dayNumber
        )
        if (!resultRule) {
            return true;
        }
        let resultPlateDigit = resultRule.lastDigitsLicensePlate.find(digit =>
            digit === this._licensePlate.lastDigit
        );
        if (!resultPlateDigit && resultPlateDigit !== 0) {
            return true;
        }
        let resultHourInterval = resultRule.hours.find(hourInterval => this.isHourBetweenPeriods(hourInterval.initialHour, hourInterval.finalHour, hour))
            if (!resultHourInterval) {
                return true;
            }
        return false;
    }

    // this function return true only if the input hour is between an interval of time of a restriction
    private isHourBetweenPeriods(initialHour: string, finalHour: string, userHour: string): boolean {
        const dateReference = '01/01/2007 '; // it can be any date
        const initialDateReference = new Date(dateReference + initialHour);
        const finalDateReference = new Date(dateReference + finalHour);
        const userDateReference = new Date(dateReference + userHour);
        return (userDateReference <= finalDateReference && userDateReference >= initialDateReference);
    }

    addRestrictionRule(rule: RestrictionCirculationRule) {
        this._rules.push(rule);
    }
}

export default PicoPlacaPredictor;