import * as ReadlineSync from "readline-sync";
export class Libro {
     nombre:string;
 paginas: number;

 constructor(){
    this.nombre="velero";
    
}
getBook(){
    let confirmarLibro: string = ReadlineSync.question("Nombre del libro?");
    console.log(confirmarLibro);
}
}
let biblioteca = new Libro();
biblioteca.getBook();
