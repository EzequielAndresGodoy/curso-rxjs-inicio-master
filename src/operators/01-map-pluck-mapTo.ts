import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//     .pipe(map<number, string>((val) => String(val * 10)))
//     .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$.subscribe(console.log);

const keyupCode$ = keyup$.pipe(map((event) => event.code));
keyupCode$.subscribe((code) => console.log("map", code));

const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));
keyupPluck$.subscribe((key) => console.log("pluck", key));

const keyupMapTo$ = keyup$.pipe(mapTo("tecla presionada"));
keyupMapTo$.subscribe((msg) => console.log("MapTo", msg));
