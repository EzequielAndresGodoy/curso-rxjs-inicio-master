import { from, of } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'X'},
    {nombre: 'Zero'},
    {nombre: 'Dr. Willy'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
]

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)