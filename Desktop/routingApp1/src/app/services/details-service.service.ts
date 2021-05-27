import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {

  constructor(public hc:HttpClient) { }

  receiveDataThroughId(id:number):Observable<any>{
    console.log(id);
    return this.hc.get('http://localhost:9000/details/'+id)
  }
}
