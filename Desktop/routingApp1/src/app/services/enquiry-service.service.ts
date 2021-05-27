import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {
  httpOptions:any
  constructor(public hc:HttpClient) { }

  sendDataToJson(obj:Object):Observable<any>{
    this.httpOptions={
      headers : new HttpHeaders({
        'Content_Type' : "application/json"
      })
    }
    console.log(obj);
    
    return this.hc.post("http://localhost:9000/enqueries",obj,this.httpOptions)
  }
}
