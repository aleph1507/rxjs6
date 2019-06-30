import * as Rx from 'rxjs';
import {map, mergeMap} from "rxjs/operators";

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

let span = document.querySelector('span');

let obs1 = Rx.fromEvent(input1, 'input');
    // .subscribe(
    //     (event) => span.textContent = (event.target as HTMLInputElement).value
    // );

let obs2 = Rx.fromEvent(input2, 'input');
    // .subscribe(
    //     (event) => span.textContent = (event.target as HTMLInputElement).value
    // );


obs1.pipe(
    mergeMap(
        event1 => {
            return obs2.pipe(
                map(event2 => (event1.target as HTMLInputElement).value + ' ' + (event2.target as HTMLInputElement).value)
            )
        }
    )
).subscribe(
    combinedValue => span.textContent = combinedValue
);
