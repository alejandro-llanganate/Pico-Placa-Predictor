import Validators from "../validators"

// It only return the same string if it pass the time validator
const validateHour = (hour: string) => {
    if(!Validators.validateTime(hour)){
        throw new Error('Format invalid of hour');
    }
    return hour;
}

export default validateHour;