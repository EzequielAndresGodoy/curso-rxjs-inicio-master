import { of, from } from "rxjs";

//of = Toma argumentos y genera una secuencia
//from = array, promise, iterable, observable

const observer = {
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
};

//Esta funcione emite cada uno de estos valores cada vez que se solciite un valor nuevo
//Es una funcion generadora
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

//Forma tradicional de atravesar mi iterable PERO PUEDO USAR FROM
// for (let id of miIterable) {
//     console.log(id);
// }

//EJEMPLO CON FROM
from(miIterable).subscribe(observer);

// const source1$ = of([1, 2, 3, 4, 5]);
// const source2$ = from([1, 2, 3, 4, 5]);
// const source3$ = from("Ezequiel");

//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
const source4$ = from(fetch("https://api.github.com/users/klerith"));

// source1$.subscribe(observer);
// source2$.subscribe(observer);
// source3$.subscribe(observer);

//Si quiero acceder a la respuesta general hago lo siguiente
// source4$.subscribe(observer);

//Pero si quiero la infor del body necesito lo siguente
//Porque el body del fetch es otra promesa mas
source4$.subscribe(async (resp) => {
    // console.log(resp);
    const dataResp = await resp.json();
    // console.log(dataResp);
});
