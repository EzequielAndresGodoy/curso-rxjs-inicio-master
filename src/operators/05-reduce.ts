import { interval, reduce } from "rxjs";
import { take, tap } from "rxjs/operators";

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual; 
};

const total = numbers.reduce( totalReducer, 0 );

console.log('Total arr', total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer, 0)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})