import {Persona} from "./persona"
import {Futbolista} from "./futbolista"
class Entrenador extends Persona {
private jugadores: Futbolista[];
jugador1 = new Futbolista("Juan","Argentina",24,5,10000,"delantero","saludable",9,5);
jugador2 = new Futbolista("Alejandro","Argentina",21,2, 95000, "arquero","saludable",24,1);
jugador3 = new Futbolista("Javier","Argentina",19,1,90000,"defensor","lesionado",3,0);
listajugadores: Futbolista[]=[this.jugador1,this.jugador2,this.jugador3]


constructor(nombre:string,edad:number,lista:Futbolista[],equipo:string,sueldo:number,antiguedad:number){
    super(nombre,equipo,edad,sueldo,antiguedad);
    this.jugadores = lista;
}

public definirTitular(){
console.log("sali de la banca");
}
public Dirigir(){
    console.log("JUAN, METELE MAS GARRA!!!");
}
public Entrenar(){
    console.log("comienza el entrenamiento");
}
public Planifica(){
console.log("este es el plan");
}

}
let jugador1 = new Futbolista("Juan","Argentina",24,5,10000,"delantero","saludable",9,5);
let jugador2 = new Futbolista("Alejandro","Argentina",21,2, 95000, "arquero","saludable",24,1);
let jugador3 = new Futbolista("Javier","Argentina",19,1,90000,"defensor","lesionado",3,0);
listajugadores: Futbolista[]=[jugador1,jugador2,jugador3]
let trainer = new Entrenador("pepe",30,Futbolista[],"boca",100000,30);
trainer.hablar();
trainer.concentrarse();
trainer.Entrenar();
trainer.definirTitular();
trainer.Dirigir();
trainer.Planifica();
