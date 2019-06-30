import * as Rx from 'rxjs';
import {map, throttleTime} from "rxjs/operators";

let observable = Rx.interval(1000);
let observer = {
    next: function(value) {
        console.log(value);
    }
};

let obsSub = observable
    .pipe(
        map(function(value) {
            return value * 2;
        }),
        throttleTime(2000)
    )
    .subscribe(observer);

setTimeout(() => {
    obsSub.unsubscribe();
}, 10000);
