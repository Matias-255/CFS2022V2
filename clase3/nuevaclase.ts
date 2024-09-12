class Watch {

     horaActual: number = 0;
     minutoActual: number = 0;
     relojPrendido: boolean = false;

    constructor(){
        this.horaActual = 20;
        this.minutoActual = 1;

    }
      gethoraActual():number{
      return this.horaActual;
     }
     getminutoActual():number{
        return this.minutoActual;
       }

    subirHora(){
        this.horaActual = this.horaActual + 1;
    }
    subirMinuto(){
        this.minutoActual = this.minutoActual + 1;
    }
    restarHora(){
        this.horaActual = this.horaActual - 1;
}  restarMinuto(){
    this.minutoActual = this.minutoActual - 1;
}  

}


let reloj = new Watch ();

console.log(reloj.gethoraActual());
console.log(reloj.getminutoActual());

reloj.subirHora();
reloj.restarHora();
reloj.subirHora();
reloj.subirMinuto();
reloj.subirMinuto();
reloj.restarMinuto();
reloj.subirMinuto();

console.log(reloj.gethoraActual());
console.log(reloj.getminutoActual());