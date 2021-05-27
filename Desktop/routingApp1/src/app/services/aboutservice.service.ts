import { Injectable } from '@angular/core';
import {aboutObject} from '../dataObjects/aboutObject'

@Injectable({
  providedIn: 'root'
})
export class AboutserviceService {

  constructor() { }

  sendTitle():string{
    return aboutObject.heading
  }

  sendAboutData():string{
    return aboutObject.main_content
  }

  sendContent():string[]{
    return aboutObject.content
  }
}
