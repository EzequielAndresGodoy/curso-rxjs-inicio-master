import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent >(document, 'click');

click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log)

//Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input)

const input$ = fromEvent(input, 'keyup')
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        //el asyncSchedules si quiero enviar este objeto de configuracion
        leading: true, // para decirle que quiero el primer elemento
        trailing: true // para decirle que quiero el ultimo elemento
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log)