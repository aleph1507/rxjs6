import * as Rx from 'rxjs';
import {Observer} from "rxjs";

let button = document.querySelector('button');

let observer = {
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error)
    },
    complete: function() {
        console.log('completed');
    }
};

let clickSub = new Rx.Observable(function(obs) {
    button.onclick = function(event) {
        obs.next(event);
    }
}).subscribe(observer);

let timeoutSub = Rx.Observable.create(function(obs: Observer<string>) {
    obs.next('a value');
    setTimeout(function() {
        obs.complete();
        obs.error('error');
        obs.next('a third value');
    },1500);
    obs.next('a second value');
}).subscribe(observer);

setTimeout(() => {
    clickSub.unsubscribe();
    timeoutSub.unsubscribe();
}, 4000);

// Rx.fromEvent(button, 'click')
//     .subscribe(observer);
    // .subscribe(
    //     (value) => console.log(value)
    // );
