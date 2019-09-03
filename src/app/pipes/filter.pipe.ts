import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: string): any {
    return items.filter(item => item.id.indexOf(term) !== -1);
  }
}
