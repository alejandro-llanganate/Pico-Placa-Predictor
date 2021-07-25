import provincesLetters from "./resources/provinces";

class Validators{

    static validateEcuadorianLicensePlate(plateNumber: string) : boolean{
        const regexFormat : RegExp = /^[A-Z]{3,3}\-[0-9]{3,4}$/;
        const validFormat = regexFormat.exec(plateNumber);
        if(!validFormat){
            return false
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
