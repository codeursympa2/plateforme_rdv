import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpecialitesService {

  url:String="http://localhost:3500/api/";
  constructor(private http:HttpClient) {}
  add(specialite:any){
      return this.http.post(this.url+"specialite",specialite);
  }

  get(){
    return this.http.get(this.url+"specialite")
  }
}
