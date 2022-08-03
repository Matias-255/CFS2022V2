import { AutoCiudad } from "./autociudad";
import { Automovil } from "./automovil";
class Camioneta extends Automovil {
   
    public pesoActual: number
    public pesoMaximo: number;

    constructor(velocidadActual:number,marca:string,año:number,pesoActual:number,pesoMaximo:number){
        super(velocidadActual,marca,año)
       this.pesoActual = pesoActual;
       this.pesoMaximo = pesoMaximo;
    }
    public acelerar(){
        this.velocidadActual += 10;
    }
     public getVelocidadActual(){
        return this.velocidadActual;
     } 

    public getMarca(){
        return this.marca;
    }

    public getAño(){
        return this.año
    }
    public subirPeso(){
        if(this.pesoActual < this.pesoMaximo){ 
        this.pesoActual += 10;
        }
        else {
            console.log("imposible, la camioneta llego al limite de peso");
        }
    }
    public bajarPeso(){
        if (this.pesoActual > 0){
        this.pesoActual -= 10; 
    } else {
        console.log("la camioneta no esta cargada, no hay nada que bajar");
    }
    }
    public getPesoActual(){
        return this.pesoActual;
    }
}

let camioneta1 = new Camioneta(220,"chevrolet",1995,500,520);
camioneta1.acelerar();
camioneta1.acelerar();
console.log(camioneta1.getVelocidadActual());
console.log(camioneta1.getAño());
console.log(camioneta1.getMarca());
camioneta1.subirPeso();
camioneta1.subirPeso();
camioneta1.subirPeso();
console.log(camioneta1.getPesoActual());
camioneta1.bajarPeso();
console.log(camioneta1.getPesoActual());
