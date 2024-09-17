
export class Persona {
    nombre: string;
    equipo: string;
    edad: number;
    sueldo: number;
    antiguedad: number;

    constructor(nombre: string,equipo: string, edad: number, sueldo: number,antiguedad: number){
       this.nombre=nombre;
       this.equipo=equipo;
       this.edad=edad;
       this.sueldo=sueldo;
       this.antiguedad=antiguedad;
    }
    
    hablar(){
        console.log("hablando...");
    }
    concentrarse(){
        console.log("concentrandonos para empezar el partido");
    }

}
