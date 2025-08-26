import { Pipe, PipeTransform } from '@angular/core';
import { Part } from '../model/part';

@Pipe({
  name: 'filtrePart'
})
export class FiltrePartPipe implements PipeTransform {

  transform(parts: Part[],value: any): Part[] {
    if(value.length != 0){
     return  parts.filter((pa)=> pa.libelle.includes(value));
    }
    return parts;
  }
}
