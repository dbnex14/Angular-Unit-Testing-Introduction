import { Pipe } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe {
    transform(value: string) {
        // split each char by nothing inbetween, reverse, then join again with nothing inbetween
        return value.split('').reverse().join('');
    }
}