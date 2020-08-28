import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dscto'
})
export class DsctoPipe implements PipeTransform {

  transform(precio: number, porcentaje: number): number {
    return precio * (100 - porcentaje) / 100;
  }

}
