// Una subscripcion es el producto de un .subscribe
// El asyncScheduler no crea un observable, crea una subscripcion
import { asyncScheduler } from "rxjs";

// Un asyncScheduler puede hacer basicamente estas 2 instrucciones
// Y podemos manejar su producto como una subscripcion como cualquier otra subscripcion en rxjs
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log("Hola mundo");
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

//Este seria como el setTimeOut

//1er Arg - funcion a ejecutar
//2er Arg - delay
//3er Arg - suponiendo que la funcion a ejecutar recibe un parametro envio el state ahi

// // asyncScheduler.schedule(saludar, 2000);
// // asyncScheduler.schedule(saludar2, 2000, "Ezequiel");

//Este seria como el setInterval
//1er Arg - funcion a ejecutar pero no peude ser funcion de flecha
//2er Arg - delay
//3er Arg - suponiendo que la funcion a ejecutar recibe un parametro envio el state ahi

const subs = asyncScheduler.schedule(
    function (state) {
        console.log("state", state);

        this.schedule(state + 1, 1000);
    },
    3000,
    0
);

//A este segundo asyncScheduler hay que desubscribirse

//Esta es una forma
// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

//Esta es otra forma
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
