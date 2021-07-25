import Validators from "../validators.js";
// It only return the same string if it pass the time validator
const validateHour = (hour) => {
    if (!Validators.validateTime(hour)) {
        throw new Error('Format invalid of hour');
    }
    return hour;
};
export default validateHour;
