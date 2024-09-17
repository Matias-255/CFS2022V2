import { Futbolista } from "./futbolista";
import { Persona } from "./persona";


class Masajista extends Persona {
    clientes: string;

    constructor(nombre:string,equipo:string,edad:number,sueldo:number,antiguedad:number){
      super(nombre,equipo,edad,sueldo,antiguedad)
      let clientes: Futbolista[] 
    }
  public Masajear(){
    console.log("recuestese y deje que haga mi magia");
  }
  public Rehabilitar(){
    console.log("listo para volver")
  }
}
let Masaje = new Masajista("matias","boca",22,100000,5);
Masaje.Masajear();
Masaje.Rehabilitar();