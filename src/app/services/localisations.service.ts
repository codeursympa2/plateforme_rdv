import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LocalisationsService {

  url:String="http://localhost:3500/api/localisation";
  constructor(private http:HttpClient) {}
  add(localisation:any){
      return this.http.post(this.url+"",localisation);
  }

  get(){
    return this.http.get(this.url+"")
  }

  delete(id:any){
    return this.http.delete(this.url+"/"+id)
  }

  getOne(id:any){
    return this.http.get(this.url+"/"+id)
  }

  update(id:any,data:any){
    return this.http.put(this.url+"/"+id,data)
  }

}
