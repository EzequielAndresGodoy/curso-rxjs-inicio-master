import { from } from "rxjs";
import { map, reduce, scan, tap } from "rxjs/operators";

const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// };

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log)

//Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log)

//redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'Fher', autenticado: false, token: null },
    { id: 'Fher', autenticado: true, token: "ABC" },
    { id: 'Fher', autenticado: true, token: "ABC123" }
];

const state$ = from(user).pipe<Usuario>(
    scan( (acc, cur) => {
        return {...acc, ...cur}
    }, { edad: 33 } )
)

const id$ = state$.pipe(
    map( state => state.id)
)

id$.subscribe(console.log)