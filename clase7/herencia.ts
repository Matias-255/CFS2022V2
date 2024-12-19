import * as ReadlineSync from "readline-sync";
export class Telefono {
    estaPrendrido: boolean;
    bateriaActual: number;

    constructor(estaPrendrido:boolean,bateriaActual:number){
       
    }

    mandarMensaje(){
     let mensaje: string = ReadlineSync.question("escriba su mensaje");
     console.log(mensaje);
    }
    hacerLlamada(){
    console.log("llamando...");
    }
    prenderApagar(){
     let switchONOFF: string = ReadlineSync.question("esta encendido o apagado?");
     if (switchONOFF === "encendido"){
        this.estaPrendrido = true;
     } else {
        this.estaPrendrido = false;
     }
    }
}

let phone = new Telefono(true,100);
phone.prenderApagar();
phone.mandarMensaje();
phone.hacerLlamada();
phone.prenderApagar();