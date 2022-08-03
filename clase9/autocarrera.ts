import {Mainauto} from "./autopadre"
class AutoCarreras extends Mainauto {
    

    constructor(marca:string,año:number,cambioActual:number,precio:number){
      super(marca,año,cambioActual,precio)
      
    }



     correrCarrera(){
        console.log("empieza la carrera")
     }
    
}
let carr = new AutoCarreras("peugeot",2005,1,1000000);
carr.subirCambio();
carr.subirCambio();
carr.getCambioActual();
carr.bajarCambio();
carr.getPrecio();
carr.correrCarrera();