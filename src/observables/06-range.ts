import { asyncScheduler, of, range } from "rxjs";

//range(DondeINICIO, CuantosVALORES)
// const src$ = range(-5, 5);
//el asyncScheduler convierte el range de sincrono a asincrono
const src$ = range(1, 5, asyncScheduler);

console.log("Inicio");
src$.subscribe(console.log);
console.log("Fin");
