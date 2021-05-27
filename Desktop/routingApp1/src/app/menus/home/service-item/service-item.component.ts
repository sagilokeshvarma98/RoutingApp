import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input('element') Data:any
  constructor() { }

  hide:boolean=true

  ngOnInit(): void {
  }

  expand(){
    this.hide = !this.hide
  }

}
