export abstract class Automovil {
    public velocidadActual: number;
    public marca: string;
    public año: number;

    public constructor(velocidadActual: number,marca: string,año:number){
        this.velocidadActual = velocidadActual;
        this.marca = marca;
        this.año = año;
    }
public getMarca(): string {
        return this.marca
    }

    public getAño(){
        return this.año
    }

    public getVelocidadActual(){
        return this.velocidadActual;
     } 
     public acelerar(): void {
        this.velocidadActual += 15;
    }
}
