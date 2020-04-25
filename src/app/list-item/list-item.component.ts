import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

   @Input() student:{id:string,name:string,photo:string,gender:string};

   @Output() removeItem = new EventEmitter<{id:string}>();

  constructor() { }

  ngOnInit() {
  }

  onRemove(){
    this.removeItem.emit({
      id: this.student.id
    })
  }

}
