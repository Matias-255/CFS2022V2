export class Mainauto {
    public marca: string;
    public año:number;
   public precio: number;
   public cambioActual: number;


constructor(marca: string,cambioActual: number, precio: number,año:number){
 this.marca=marca;
this.cambioActual=cambioActual;
 this.precio=precio;
 this.año=año;
}
getCambioActual(){
    return this.cambioActual;
}
getPrecio(){
    return this.precio;
}

subirCambio(){
    this.cambioActual = this.cambioActual + 1;
 }
 bajarCambio(){
    this.cambioActual = this.cambioActual - 1;
 }


}








