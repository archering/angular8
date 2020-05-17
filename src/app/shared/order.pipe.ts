import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(arr:number[], direc:boolean): any {
      if(arr){
          return arr.sort( (a:number,b:number):number=>{
            return direc? b - a : a - b;
          })
      }else{
        return arr;
      }
  }

}
