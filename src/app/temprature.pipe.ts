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
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType: 'cel' | 'fah',
  ) {

    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp : number;
    if(inputType === 'cel' && outputType === 'fah'){
        outputTemp = val * (9 / 5) + 32;
    }
    else if(inputType === 'fah' && outputType === 'cel'){
      outputTemp = (val - 32) * (5 / 9);
    }else{
      outputTemp = val;
    }


    let symbol : '℉' | "C";
      if(!outputType){
        symbol = inputType === 'cel' ? 'C' : '℉';
      }else{  
        symbol = outputType === 'cel' ? 'C' : '℉';
      }


    return `${outputTemp} ${symbol} `;
  }
}
