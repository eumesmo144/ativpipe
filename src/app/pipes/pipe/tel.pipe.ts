import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tel'
})
export class TelPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length == 8) {
      return value.substring(0, 4)
      + '-' + value.substring(4, 8)
    } else if (value.length == 10 || value.length == 11 && value.charAt(0) == '0') {
      const ddd = value.substring(value.length - 10, 2);
      const n1 = value.substring(value.length - 8, 4);
      const n2 = value.substring(value.length - 4, 4);
      return '(${ddd} ${n1}-${n2})';
    } 
    else {
      return value;
    }
  
  }
}
