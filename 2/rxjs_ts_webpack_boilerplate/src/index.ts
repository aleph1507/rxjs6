import  * as Rx from 'rxjs';
import {map, throttleTime} from "rxjs/operators";

let button = document.querySelector('button');
Rx.fromEvent(button, 'click')
    .pipe(
        throttleTime(1000),
        map((data: MouseEvent) => {
            return data.clientY;
        })
    )
    .subscribe(
        (coordinate) => console.log(coordinate)
    );
    // .subscribe(
    //     (event: MouseEvent) => console.log(event.clientX)
    // );
