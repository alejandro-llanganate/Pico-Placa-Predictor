"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const license_plate_1 = __importDefault(require("../src/license-plate"));
const pico_placa_predictor_1 = __importDefault(require("../src/pico-placa-predictor"));
const rules_1 = __importDefault(require("../src/resources/rules"));
describe('PicoPlacaPredictor', () => {
    describe('PicoPlacaPredictor.isAuthorizedToCirculate()', () => {
        it('Should return true given a weekend day and a correct date and license plate', () => {
            const userPlate = new license_plate_1.default('PTO-0168');
            const predictor = new pico_placa_predictor_1.default(userPlate, rules_1.default);
            chai_1.expect(predictor.isAuthorizedToCirculate(new Date("2021-07-25"), "12:00")).to.equal(true);
        });
        it('Should return false given a day, time and last digit license plate inside the restrictions', () => {
            const userPlate = new license_plate_1.default('PTO-0162');
            const predictor = new pico_placa_predictor_1.default(userPlate, rules_1.default);
            chai_1.expect(predictor.isAuthorizedToCirculate(new Date("2021-07-19"), "08:00")).to.equal(false);
        });
    });
});
