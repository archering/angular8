import { Directive, Input, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  //设置一个setter输入属性，名字和指令明相同
  @Input() set unless(sum:number) {
      if(sum === 10){
          this.vc.createEmbeddedView(this.tempalte);
      }else {
        this.vc.clear();
      }
  }

  @HostBinding("id") name:string = "meiguo";

  /***
   * 
   * template 是要插入的模板数据，默认情况下是存储在 <ng-template>内的，不会被渲染
   * vc 是要模板数据要插入的地方
   */
  constructor(private tempalte:TemplateRef<any>,private vc:ViewContainerRef) { 

  }



}
