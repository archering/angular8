import { Component, OnInit , Input, Output, EventEmitter, ViewEncapsulation, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  encapsulation:ViewEncapsulation.Emulated// 这里可以有三个值，None全局样式，Emulated 默认 Native shadowdom
})
export class ListItemComponent implements OnInit {

   @Input() student:{id:string,name:string,photo:string,gender:string};

   @Output() removeItem = new EventEmitter<{id:string}>();

   @ViewChild('theImage') icon:HTMLElement;



  constructor() {

    
   }

  ngOnInit() {
    
    console.log(this.icon.nativeElement.src);
  }

  onRemove(image:HTMLImageElement){
    console.log(this.icon.nativeElement.src);
    console.log(image.src);
    this.removeItem.emit({
      id: this.student.id
    })
  }

}
