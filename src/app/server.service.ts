import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Register1 } from './register1/register1';
import { User } from './model/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { error } from 'util';



@Injectable()
export class ServerService {
    constructor(private http: Http) {}

     private apiUrl = 'http://localhost:8080/rest/users/loadP';
     private apiUrl1 = 'http://localhost:8080/rest/users/all';
     private apiUrl2 = 'http://localhost:8080/rest/delete';
     private apiUrl3 = 'http://localhost:8080/rest/update';
     private apiUrl4 = 'http://localhost:8080/rest/update1';
     private id:number;

    create(user : User){
      console.log("create block");
      return this.http.post(this.apiUrl, user);
    }

    findAll(): Observable<User[]> {
      return this.http.get(this.apiUrl1)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteUserById(id: number) {
      return this.http.delete(this.apiUrl2+'/'+id);
    }

    findUser(id: number): Observable<User> {
      return this.http.get(this.apiUrl3+'/'+id)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateUser(user: User,id:number):  Observable<User>{
      return this.http.put(this.apiUrl4+"/"+id, user)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}