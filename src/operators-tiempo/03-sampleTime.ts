import { fromEvent } from "rxjs";
import { map, sample, sampleTime } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x,y})),
    sampleTime(2000),
).subscribe(console.log)