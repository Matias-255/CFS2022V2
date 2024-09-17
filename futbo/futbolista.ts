import {Persona} from "./persona"

export class Futbolista {
    posicion: string;
    lesion: string;
    numero: number;
    goles: number;

    constructor(nombre: string, equipo:string, edad: number,antiguedad: number, sueldo: number ,posicion:string,lesion:string,numero:number,goles:number){
        //super(nombre,equipo,edad,antiguedad, sueldo)
       this.posicion=posicion;
       this.lesion=lesion;
       this.numero=numero;
       this.goles=goles;
    }
    entrenar(){
        console.log("hora de entrenar");
    
    }
    hacerGol(){
        console.log("GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLLLLLLLLLLLLLLLLL")
        
    }
    jugar(){
        console.log("a jugar");
    }
    atajar(posicion){
        console.log("voy al arco");
    }
    hacerFalta(){
        console.log("tirate al piso y llora");
    }
}





