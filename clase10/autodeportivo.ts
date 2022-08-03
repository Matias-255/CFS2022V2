import { Automovil } from "./automovil";
 class AutoDeportivo extends Automovil{
    
    public velocidadMaxima: number;

    constructor(velocidadActual:number,marca:string,año:number,velocidadMaxima:number){
        super(velocidadActual,marca,año)
        
    this.velocidadMaxima = velocidadMaxima;
    }
    public acelerar() {
        if (this.velocidadActual < this.velocidadMaxima){
            this.velocidadActual += 15;
        }
        else {
            console.log("imposible acelerar, llegaste a la velocidad maxima disponible");
        }
    }

    public getVelocidadActual(){
        return this.velocidadActual;
     } 

    public getMarca(){
        return this.marca;
    }
    public getaño(){
        return this.año;
    }
    public getVelocidadMaxima(){
        return this.velocidadMaxima;
    }

}
let deportivo1 = new AutoDeportivo(240,"abc",2000,260);
deportivo1.acelerar();
deportivo1.acelerar();
deportivo1.acelerar();
console.log(deportivo1.getVelocidadActual());
console.log(deportivo1.getMarca());
console.log(deportivo1.getaño());
console.log(deportivo1.getVelocidadMaxima());
