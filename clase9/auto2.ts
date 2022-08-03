import {Mainauto} from "./autopadre"
class Auto extends Mainauto {

  
constructor(marca:string,año:number,precio:number,cambioActual:number){
    super(marca,año,precio,cambioActual)


}

public getPrecio(): number{
    console.log(this.precio)
    return this.precio;
}
public getAño(): number{
    console.log(this.año)
    return this.año;
}
public getMarca(): string{
    console.log(this.marca)
    return this.marca;
}



 }
 let auto1 = new Auto("peugeot",1,2005,70000);
 auto1.getAño();
 auto1.getMarca();
 auto1.getPrecio();