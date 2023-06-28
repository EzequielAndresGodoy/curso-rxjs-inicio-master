import { catchError, map, pluck } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax'
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5'
const fetchPromesa = fetch(url);

//CON FETCH
const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    } 
    return response;
}
// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data) )
//     .catch( err => console.warn('Error en usuarios', err) )


//CON AJAX
const atrapaError = (error: AjaxError) => {
    console.log('Error en ', error)
    return of([]);// En caso de error no encuenta los usuarios y regreso un [] vacio para no romper el codigo
}

ajax(url).pipe(
    pluck('response'),
    catchError( atrapaError )
).subscribe(user => console.log('usuarios: ', user))