import * as Rx from 'rxjs';
import {filter} from "rxjs/operators";

let observable = Rx.interval(1000);

let obsSub = observable
    .pipe(
        filter(function(value) {
            return value % 2 == 0;
        }, this)
    )
    .subscribe({
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log('Error: ', error);
    }
});
