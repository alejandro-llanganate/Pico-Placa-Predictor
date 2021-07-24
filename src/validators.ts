import provincesLetters from "./resources/provinces";

class Validators{

    static validateEcuadorianLicensePlate(plateNumber: string) : boolean{
        const regexFormat = /^[A-Z]{3}-?[0-9]{3,4}$/g;
        if(!regexFormat){
            return false;
        }
        const firstLetter = plateNumber.charAt(0);
        const firstLetterCorrect = Object.keys(provincesLetters).find((letter) => letter === firstLetter)
        if(!firstLetterCorrect){
            return false;
        }
        return true;
    }
}

export default Validators;
