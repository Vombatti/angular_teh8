import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(sulkupois: string) :any {
    const index: number = sulkupois.indexOf('(');

    const juttu = sulkupois.substring(0, index);
    return juttu;
  }

}
