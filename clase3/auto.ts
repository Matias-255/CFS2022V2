import * as ReadlineSync from "readline-sync";

class Auto {

    cambioActual: number = 0;
    autoPrendido: boolean = false;

    constructor(){
        this.cambioActual = 1;
    }
    getCambioActual(){
        return this.cambioActual;
    }
     subirCambio(){
        this.cambioActual = this.cambioActual + 1;
     }
     bajarCambio(){
        this.cambioActual = this.cambioActual - 1;
     }

}

class RegistroAutomotor{
    
}

let automovil = new Auto();

console.log(automovil.getCambioActual());

automovil.subirCambio();
automovil.bajarCambio();
automovil.subirCambio();

console.log(automovil.getCambioActual());
