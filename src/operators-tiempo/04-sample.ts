import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

//sample me da el valor del intervalo en el momento en que click emite un evento
//Es decir, cuando hago click obtengo el valor en el que esta el interval
interval$.pipe(
    sample(click$)
).subscribe(console.log)