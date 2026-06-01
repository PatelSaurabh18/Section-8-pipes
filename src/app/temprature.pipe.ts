import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TempraturePipe implements PipeTransform {

  /*
    value :- The value on which the pipe is used 
    ...args:- The configuration values in the pipe  
  */
  transform(value: any, ...args: any[]) {
    return value + ' - transformed!';
  }

}
