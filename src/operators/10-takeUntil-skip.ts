import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton)

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('Tap antes de skip')),
    skip(2),
    tap(() => console.log('Tap despues de skip')),
);

counter$.pipe(
    takeUntil(clickBtn$),
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})