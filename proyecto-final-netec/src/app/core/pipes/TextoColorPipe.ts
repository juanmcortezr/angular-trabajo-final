import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoColor'
})
export class TextoColorPipe implements PipeTransform {

  transform(value: any): string {

    console.log("valor del pipe: " + value);

    if (value != null && value.length > 0) {
      return 'red';
    }
    return 'green';
  }
}