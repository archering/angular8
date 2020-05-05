import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[myHover]'
})
export class MyHoverDirective {

  @HostBinding('style.fontSize') size:String = "12px";

  constructor(private element:ElementRef,private render:Renderer2) {
  }
   ngOnInit(){
      this.element.nativeElement.style.color = "red";
      this.render.setStyle(this.element.nativeElement,"backgroundColor","blue");
      //直接通过属性选择装饰器设置属性值
      this.size = "30px";
   }

   @HostListener("mouseenter") mouseenter(ent:MouseEvent){
    this.render.setStyle(this.element.nativeElement,"backgroundColor","green");
   }
   @HostListener("mouseout") mouseout(ent:MouseEvent){
    this.render.setStyle(this.element.nativeElement,"backgroundColor","yellow");
   }

}
