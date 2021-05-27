import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(public hp:HttpClient) { }

  getDataFromUrl():Observable<any>{
    return this.hp.get("http://localhost:9000/contacts")
  }
}
