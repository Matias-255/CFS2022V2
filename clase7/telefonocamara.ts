import * as ReadlineSync from "readline-sync"
import {Telefono} from "./herencia"
class TelefonoconCamara extends Telefono {
  estadoCamara: boolean;

  constructor(estaPrendrido:boolean,bateriaActual:number,estadoCamara:boolean){
    super(estaPrendrido,bateriaActual)
      this.estadoCamara = estadoCamara;
  }
sacarFoto(){
    let inspeccion: string = ReadlineSync.question("la camara funciona? (escribir si o no)")
    if (inspeccion === "si") {
this.estadoCamara = true;
console.log("sacando foto....")
    } else {
 this.estadoCamara = false;
 console.log("la camara no funciona, cancelando accion...")
    }
}

}
let camaras = new TelefonoconCamara(true,20,true);
camaras.sacarFoto();

