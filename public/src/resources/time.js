import Validators from "../validators.js";
const validateHour = (hour) => {
    if (!Validators.validateTime(hour)) {
        throw new Error('Format invalid of hour');
    }
    return hour;
};
export default validateHour;
