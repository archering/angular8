import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital',
  pure:true
})
export class CapitalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(typeof value === "string") {
        if(!args){
          return value.charAt(0).toUpperCase() + value.slice(1);
        }else {
          return value.slice(0,args).toUpperCase() + value.slice(args);

        }
      }else {
        return value;
      }
  }

}
