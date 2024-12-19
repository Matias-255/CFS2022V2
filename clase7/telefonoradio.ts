import * as ReadlineSync from "readline-sync";
import { Telefono } from "./herencia";

class TelefonoconRadio extends Telefono{
    frecuenciaActual: number;

    constructor(estaPrendrido:boolean,bateriaActual:number,frecuenciaActual:number){
        super(estaPrendrido,bateriaActual)
     this.frecuenciaActual = frecuenciaActual;
    }
    setfrecuenciaActual(){
        this.frecuenciaActual = ReadlineSync.question("introduzca Frecuencia");
    }
    verfrecuenciaActual(){
        console.log(this.frecuenciaActual);
    }

}
let radio = new TelefonoconRadio(true,50,100);
radio.setfrecuenciaActual();
radio.verfrecuenciaActual();

