import { Alumno } from "./alumno";
import { Profesor } from "./profesor";

export class Colegio{
    nombre:string;
    alumno1 = new Alumno("andres", 7);
    alumno2 = new Alumno("paula",6);
    alumnos : Alumno[] = [this.alumno1,this.alumno2];
    profesores:Profesor[]=[new Profesor("sandra"), new Profesor("alejandro"), new Profesor("jose")]
    constructor(){
        this.nombre = this.nombre;
    } 
    agregarAlumno(){
this.alumnos.push(new Alumno())
    }
    expulsarAlumno(alumno){
        this.alumnos.splice(this.alumnos.indexOf(alumno))
    }
}

let escuela = new Colegio();
escuela.agregarAlumno();
