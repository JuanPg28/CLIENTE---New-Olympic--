import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {

    const resultPosts = [];

    for(const juegoolimpico of value) {
      if(juegoolimpico.ciudad.toLowerCase().indexOf(args) > -1) {
        resultPosts.push(juegoolimpico);
      }
    }

    return resultPosts;
  }

}
