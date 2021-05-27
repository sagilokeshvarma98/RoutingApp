import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public hs:HomeServiceService) { }

  service_item:any

  ngOnInit(): void {
    this.hs.getDataFromUrl().subscribe(
      (data)=>{
        this.service_item = data
        console.log(this.service_item);
      },
      ()=>this.service_item=[])
      
  }

}
