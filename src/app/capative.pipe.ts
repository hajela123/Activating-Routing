import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capative'
})
export class CapativePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
