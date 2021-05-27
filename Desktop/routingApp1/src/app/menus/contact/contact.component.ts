import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  addresses:any;
  constructor(public cs:ContactServiceService) { }

  ngOnInit(): void {
    this.addresses=this.cs.getDataFromUrl().subscribe((data)=>{
      this.addresses = data
    },
    (err)=>{
      console.log(err.message);
    })

    
  }

}
