import { Directive, HostBinding, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[showorhide]'
})
export class ShowDirective implements OnInit{

  @HostBinding('style.display') display:string = "none";
  @Input() showorhide:string = "1";// 1 显示 0 不显示

  constructor(private host:ElementRef,private render:Renderer2) {

  }

  ngOnInit(){
    if(this.showorhide === "1"){
      this.display = "block";
    }else{
      this.display = "none";
    }
  }

}
