import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'canFlyCase'
})
export class CanFlyCasePipe implements PipeTransform {
  transform(value: boolean): 'Vuela' | 'No vuela' {
    return ( value )
      ? 'Vuela'
      : 'No vuela';
  }
}
