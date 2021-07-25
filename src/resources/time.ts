import Validators from "../validators"

const validateHour = (hour: string) => {
    if(!Validators.validateTime(hour)){
        throw new Error('Format invalid of hour');
    }
    return hour
}

export default validateHour