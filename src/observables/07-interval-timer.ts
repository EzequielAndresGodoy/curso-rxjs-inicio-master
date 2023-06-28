import { interval, timer } from "rxjs";

const observer = {
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
};

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

//emite cada un segundo
const interval$ = interval(1000);

//hace la emision despues de 2 segundos
// const timer$ = timer(2000);

//hace la emision despues de 2 segundos y luego cada segundo
// const timer$ = timer(2000, 1000);

//
const timer$ = timer(hoyEn5);

console.log("Inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");
