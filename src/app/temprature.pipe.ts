import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempraturePipe implements PipeTransform {
  /*
    value :- The value on which the pipe is used 
    ...args:- The configuration values in the pipe  
  */
  transform(value: string | number) {
    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    }else{
      val = value;
    }

    const outputTemp = val * (9 / 5) + 32;

    return `${outputTemp} ℉ `;
  }
}
