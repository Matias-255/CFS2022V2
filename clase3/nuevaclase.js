var UnReloj = /** @class */ (function () {
    function UnReloj() {
        this.horaActual = 0;
        this.minutoActual = 0;
        this.relojPrendido = false;
        this.horaActual = 20;
        this.minutoActual = 1;
    }
    UnReloj.prototype.gethoraActual = function () {
        return this.horaActual;
    };
    UnReloj.prototype.getminutoActual = function () {
        return this.minutoActual;
    };
    UnReloj.prototype.subirHora = function () {
        this.horaActual = this.horaActual + 1;
    };
    UnReloj.prototype.subirMinuto = function () {
        this.minutoActual = this.minutoActual + 1;
    };
    UnReloj.prototype.restarHora = function () {
        this.horaActual = this.horaActual - 1;
    };
    UnReloj.prototype.restarMinuto = function () {
        this.minutoActual = this.minutoActual - 1;
    };
    return UnReloj;
}());
var reloj = new UnReloj();
console.log(reloj.gethoraActual());
console.log(reloj.getminutoActual());
reloj.subirHora();
reloj.restarHora();
reloj.subirHora();
reloj.subirMinuto();
reloj.subirMinuto();
reloj.restarMinuto();
reloj.subirMinuto();
console.log(reloj.gethoraActual());
console.log(reloj.getminutoActual());
