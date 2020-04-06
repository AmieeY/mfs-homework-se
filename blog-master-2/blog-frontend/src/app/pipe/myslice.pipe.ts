import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myslice'
})
export class MyslicePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
