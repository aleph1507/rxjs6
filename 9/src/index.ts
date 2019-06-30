import * as Rx from 'rxjs';
import {debounceTime, distinctUntilChanged, map, pluck} from "rxjs/operators";

let input = document.querySelector('input');

let observable = Rx.fromEvent(input, 'input');

observable
    .pipe(
        // map(event => (event.target as HTMLInputElement).value),
        pluck('target', 'value'),
        debounceTime(500),
        distinctUntilChanged()
    )
    .subscribe({
        next: function(value) {
            console.log(value);
        }
    });
