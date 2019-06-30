import * as Rx from 'rxjs';


let subject = new Rx.Subject();

subject.subscribe({
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log('complete');
    }
});

subject.subscribe({
    next: function(value) {
        console.log(value);
    }
});

subject.next('a new data piece');
subject.error('Error');
subject.complete();
