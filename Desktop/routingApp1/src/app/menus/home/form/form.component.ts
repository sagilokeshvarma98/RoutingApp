import { Component, OnInit } from '@angular/core';
import { EnquiryServiceService } from 'src/app/services/enquiry-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname:any
  lname:any
  email:any
  phnNo:any
  cmpName:any
  address:any
  errors:string[]=[]
  hide:boolean=false
  constructor(private es:EnquiryServiceService) { }

  ngOnInit(): void {
  }

  letsSenddata(){
    this.hide=false
    this.errors = []
    let regEx = /^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/
    if(this.fname==undefined || this.fname.length<3){
      this.errors.push("Enter minimum of 3 characters")
    }
    if(this.lname==undefined || this.lname.length<3){
      this.errors.push("Enter valid last name")
    }
    if(this.email==undefined || !regEx.test(this.email)){
      this.errors.push("Enter valid email")
    }
    if(this.phnNo==undefined || this.phnNo.length!=10){
      this.errors.push("Enter 10 dight pone number")
    }
    if(this.cmpName==undefined || this.cmpName.length<3){
      this.errors.push("Company name should be minimum of 3 characters")
    }
    if(this.address==undefined || this.address.length<20){
      this.errors.push("Enter atleast 20 characters in address")
    }
    if(this.errors.length==0){
      let obj={
        first_name : this.fname,
        last_name : this.lname,
        email : this.email,
        phone_number : this.phnNo,
        company_name : this.cmpName,
        address : this.address
      }
      this.es.sendDataToJson(obj).subscribe(
        ()=>{
          this.hide=true
          this.fname="",
          this.lname="",
          this.email="",
          this.phnNo="",
          this.cmpName="",
          this.address=""
        },
        (err)=>console.log(err.message)        
      )
    }
  }

}
