import * as Rx from 'rxjs';
import {switchMap} from "rxjs/operators";

let button = document.querySelector('button');

let obs1 = Rx.fromEvent(button, 'click');
let obs2 = Rx.interval(1000);

obs1.pipe(
    switchMap(event => {
        return obs2
    })
).subscribe(
    (value) => console.log(value)
);

// obs1.subscribe(
//     (event) => obs2.subscribe(
//         (value) => console.log(value)
//     )
// );
