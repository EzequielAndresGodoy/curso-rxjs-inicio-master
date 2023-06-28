import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

// const url = 'https://httpbin.org/delay/1';
const url = 'https://api.github.com/users?per_page=5'
const manejaErrores = (resp: AjaxError) => {
    console.warn('Error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

//FORMA UNO DE MANEJAR ERROR
// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaErrores)
// )
// const obs2$ = ajax(url).pipe(
//     catchError(manejaErrores)
// )

const obs$ = ajax.getJSON(url).pipe()
// const obs2$ = ajax(url).pipe()

//FORMA 2 DE MANEJAR ERROR (ACA ESTA LA 1 Y 2 CONBINADA) USO CATCHERROR(MANEJAERRORES) Y EL OBSERVER
obs$.pipe(
    catchError(manejaErrores)
).subscribe({
    next: val => console.log('next: ', val),
    error: err => console.warn('Error en subs: ', err),
    complete: () => console.log('complete')
});
// obs2$.subscribe(data => console.log('Ajax: ', data));