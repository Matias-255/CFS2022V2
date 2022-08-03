"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
        console.log("celular prendido");
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
        console.log("celular apagado");
    };
    SmartPhone.prototype.llamar = function () {
        console.log("ingresando numero");
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("sonria");
    };
    return SmartPhone;
}());
var smart1 = new SmartPhone();
smart1.prender();
smart1.llamar();
smart1.sacarFoto();
smart1.apagar();
