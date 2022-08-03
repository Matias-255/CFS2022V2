import {Telefono} from "./telinterface"
class SmartPhone implements Telefono {
private estaPrendido: boolean;

constructor(){
this.estaPrendido = false;
}

public prender():void{
    
        this.estaPrendido = true;
console.log("celular prendido") 
}

public apagar():void{
this.estaPrendido = false;
console.log("celular apagado");
}
public llamar():void{
    
console.log("ingresando numero")
}
public sacarFoto():void{
console.log("sonria")
}
}
let smart1 = new SmartPhone();
smart1.prender();
smart1.llamar();
smart1.sacarFoto();
smart1.apagar();
