import * as Rx from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";

let input = document.querySelector('input');

let observable =
    Rx.fromEvent(input, 'input');

observable
    .pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged()
    )
    .subscribe({
        next: function(value) {
            console.log(value);
        }
    });
