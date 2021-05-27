import { Component, OnInit } from '@angular/core';
import { AboutserviceService } from 'src/app/services/aboutservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  heading:string=""
  aboutContent:string=""
  aboutSummary:string[]=[]
  constructor(public as:AboutserviceService) { }

  ngOnInit(): void {
    this.heading=this.as.sendTitle()
    this.aboutContent=this.as.sendAboutData()
    this.aboutSummary=this.as.sendContent()
  }



}
