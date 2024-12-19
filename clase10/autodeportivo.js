"use strict";
exports.__esModule = true;
var AutoDeportivo = /** @class */ (function () {
    function AutoDeportivo() {
        this.velocidadActual = 0;
        this.marca = "peugeot";
        this.año = 2021;
        this.velocidadMaxima = 300;
    }
    AutoDeportivo.prototype.acelerar = function () {
        if (this.velocidadActual < this.velocidadMaxima) {
            this.velocidadActual += 15;
        }
        else {
            console.log("imposible acelerar, llegaste a la velocidad maxima disponible");
        }
    };
    AutoDeportivo.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    AutoDeportivo.prototype.getMarca = function () {
        return this.marca;
    };
    AutoDeportivo.prototype.getaño = function () {
        return this.año;
    };
    AutoDeportivo.prototype.getVelocidadMaxima = function () {
        return this.velocidadMaxima;
    };
    return AutoDeportivo;
}());
var deportivo1 = new AutoDeportivo();
deportivo1.acelerar();
deportivo1.acelerar();
deportivo1.acelerar();
console.log(deportivo1.getVelocidadActual());
console.log(deportivo1.getMarca());
console.log(deportivo1.getaño());
console.log(deportivo1.getVelocidadMaxima());
