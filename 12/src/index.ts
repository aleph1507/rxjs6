import * as Rx from 'rxjs';

let clickEmitted = new Rx.BehaviorSubject('Not clicked');

let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', () => {
    clickEmitted.next('clicked');
});

clickEmitted.subscribe(
    (value) => div.textContent = value
);

// let clickEmitted = new Rx.Subject();
//
// let button = document.querySelector('button');
// let div = document.querySelector('div');
//
// button.addEventListener('click', () => {
//     clickEmitted.next('Clicked');
// });
//
// clickEmitted.subscribe(
//     (value: string) => div.textContent = value
// );
