import provincesLetters from "./resources/provinces.js";
class Validators {
    // validates: ABC-1234 or ABC-123
    static validateEcuadorianLicensePlate(plateNumber) {
        const regexFormat = /^[A-Z]{3,3}\-[0-9]{3,4}$/;
        const validFormat = regexFormat.exec(plateNumber);
        if (!validFormat) {
            return false;
        }
        const firstLetter = plateNumber.charAt(0);
        const firstLetterCorrect = Object.keys(provincesLetters).find((letter) => letter === firstLetter);
        if (!firstLetterCorrect) {
            return false;
        }
        return true;
    }
    // validates HH:MM
    static validateTime(time) {
        const regexFormat = /^[0-2]{1}?[0-9]{1}:[0-9]{1,2}?$/;
        const validFormat = regexFormat.exec(time);
        if (!validFormat) {
            return false;
        }
        let hours = parseInt(time.split(':')[0]);
        if (hours >= 24) {
            return false;
        }
        return true;
    }
}
export default Validators;
