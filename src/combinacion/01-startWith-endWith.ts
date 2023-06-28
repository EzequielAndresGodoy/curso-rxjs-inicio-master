import { endWith, of,  } from "rxjs";
import { startWith,  } from "rxjs";



const numeros$ = of(1,2,3);

numeros$.pipe(
    startWith('a','b','c'),
    endWith('x','y','z'),
).subscribe(console.log) 