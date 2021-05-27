import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private hc:HttpClient) { }

  getDataFromUrl():Observable<any>{
    return this.hc.get("http://localhost:9000/services")
  }
}
