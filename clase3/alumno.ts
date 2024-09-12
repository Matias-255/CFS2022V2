import { Profesor } from "./profesor";
import { Colegio } from "./colegio";

export class Alumno {
  private nombre:string;
   private nota:number;
   private aprobado:boolean;

constructor(nom:string, not:number){
this.nombre=nom;
this.nota=not;
}
setBuenaNota(){
    this.nota = 7;
}
setMalaNota(){
    this.nota = 5;
}

setNombre(){
    this.nombre = "matias";
    console.log("el nombre es",this.nombre)
}



aprobar(){
    if (this.nota > 7){
        this.aprobado = true; 
    console.log("aprobado");  
} else {
    this.aprobado = false;
    console.log("desaprobado");
}
}

}



