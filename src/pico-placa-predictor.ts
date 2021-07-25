import RestrictionCirculationRule from "./restriction-circulation-rule";
import LicensePlate from "./license-plate";
import picoYPlacaRules from "./resources/rules";

class PicoPlacaPredictor {
    private _licensePlate: LicensePlate;
    private _rules: RestrictionCirculationRule[];

    constructor(licensePlate: LicensePlate, restrictions: RestrictionCirculationRule[]) {
        this._licensePlate = licensePlate;
        this._rules = restrictions;
    }

    isAuthorizedToCirculate(date: Date, hour: string): boolean {
        const dayNumber = date.getDay() + 1;
        let resultRule = this._rules.find(restriction => restriction.day === dayNumber)
        if (!resultRule) {
            return true;
        }
        console.log(resultRule)
        let resultPlateDigit = resultRule.lastDigitsLicensePlate.find(digit => digit === this._licensePlate.lastDigit);
        if (!resultPlateDigit) {
            return true;
        }
        let resultHourInterval = resultRule.hours.find(hourInterval => this.isHourBetweenPeriods(hourInterval.initialHour, hourInterval.finalHour, hour))
        if (!resultHourInterval) {
            return true;
        }
        return false;
    }

    private isHourBetweenPeriods(initialHour: string, finalHour: string, userHour: string): boolean {
        const dateReference = '01/01/2007 ';
        const initialDateReference = new Date(dateReference + initialHour);
        const finalDateReference = new Date(dateReference + finalHour);
        const userDateReference = new Date(dateReference + userHour);
        return (userDateReference <= finalDateReference && userDateReference >= initialDateReference);
    }

    addRestrictionRule(rule: RestrictionCirculationRule) {
        this._rules.push(rule);
    }
}
