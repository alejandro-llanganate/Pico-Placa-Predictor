import LicensePlate from "./license-plate.js";
import PicoPlacaPredictor from "./pico-placa-predictor.js";
import picoYPlacaRules from "./resources/rules.js";

let formPicoPlaca = document.getElementById("formPicoPlaca");


if(formPicoPlaca){
    formPicoPlaca.onsubmit = (event) => {
        const inputLicensePlate = document.querySelector<HTMLInputElement>('#userLicensePlate')!.value;
        const inputDate = new Date(document.querySelector<HTMLInputElement>('#userDate')!.value);
        const inputHour = document.querySelector<HTMLInputElement>('#userHour')!.value;
        const licencePlate = new LicensePlate(inputLicensePlate);
        const predictor = new PicoPlacaPredictor(licencePlate, picoYPlacaRules);
        const isAuthorized = predictor.isAuthorizedToCirculate(inputDate, inputHour);
        event.preventDefault();
    }
}