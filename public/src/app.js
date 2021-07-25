import LicensePlate from "./license-plate.js";
import PicoPlacaPredictor from "./pico-placa-predictor.js";
import picoYPlacaRules from "./resources/rules.js";
let formPicoPlaca = document.getElementById("formPicoPlaca");
if (formPicoPlaca) {
    formPicoPlaca.onsubmit = (event) => {
        const inputLicensePlate = document.querySelector('#userLicensePlate').value;
        const inputDate = new Date(document.querySelector('#userDate').value);
        const inputHour = document.querySelector('#userHour').value;
        console.log(inputLicensePlate, inputDate, inputHour);
        const licencePlate = new LicensePlate(inputLicensePlate);
        const predictor = new PicoPlacaPredictor(licencePlate, picoYPlacaRules);
        const isAuthorized = predictor.isAuthorizedToCirculate(inputDate, inputHour);
        if(isAuthorized){
            swal({
                title: "Great!",
                text: `You car with ${inputLicensePlate} license plate can be on the road.`,
                icon: "success",
                button: "Ok",
              });
        }else{
            swal({
                title: "Oh, sorry!",
                text: `You car with ${inputLicensePlate} license plate can not be on the road.`,
                icon: "error",
                button: "Close",
              });
        }
        event.preventDefault();
    };
}
