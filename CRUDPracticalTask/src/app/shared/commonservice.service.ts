import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  url:string=" http://localhost:3000/Employee/"

  constructor(private http:HttpClient) { }

  e:Employee={
    id:0,
    name: " ",
    username: " ",
    password: " ",
  }
  
  postData(emp:Employee){
    return this.http.post(this.url,emp);
  }

  getdata(){
    return this.http.get(this.url);
  }
 
  deleteData(id:number){
    return this.http.delete(this.url+id);
  }

  updateData(emp:Employee){
    return this.http.put(this.url+emp.id,emp); 
  }


}
