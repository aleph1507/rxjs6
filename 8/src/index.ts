import * as Rx from 'rxjs';
import {reduce, scan} from "rxjs/operators";

let input = document.querySelector('input');
let observable = Rx.of(1, 2, 3, 4, 5);

observable
    .pipe(
        reduce((total, currentValue) => {
            return total + currentValue;
        }, 0)
    )
    .subscribe({
        next: function(value) {
            console.log(value);
        }
    });

observable
    .pipe(
        scan((total, currentValue) => {
            return total + currentValue;
        }, 0)
    )
    .subscribe({
        next: function(value) {
            console.log(value);
        }
    });
