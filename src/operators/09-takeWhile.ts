import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent >(document, 'click');

click$.pipe(
    map( ({x,y}) => ({x,y}) ),
    /*
    takeWhile(Funcion, Inclusive)
    Function -> condiciones que duelve true o false
    Inclusive -> booleano que hace que entregue o no la comparacion que rompio la condicion
                es decir, el que primero que fue falso, lo devuelve o no.
    */
    takeWhile( ({y}) => y <= 150, true)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})