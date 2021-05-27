import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsServiceService } from 'src/app/services/details-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  obj:any;
  id:any;

  constructor(private route:ActivatedRoute , public ds:DetailsServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((idNo)=>this.id=idNo.id)
    console.log(this.id,typeof(this.id));
    
   
    this.obj = this.ds.receiveDataThroughId(this.id).subscribe(data=>{
      this.obj = data
    })
    
    
  }

}
