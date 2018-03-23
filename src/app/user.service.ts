import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Register1 } from './register1/register1';
import { Response, Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { error } from 'util';

@Injectable()
export class UserService {

  private apiUrl = 'http://localhost:8080/reat/user';

  constructor(private http : Http) { }

  findAll( ): Observable<User[]> {
        return this.http.get(this.apiUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  findById(id: number): Observable<User>{
    return null;
  }

  saveUser(user: User): Observable<User>{
    return this.http.post(this.apiUrl, user)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
   ;
  }

  deleteUserById(id: number): Observable<boolean>{
    return null;
  }

  updateUser(user: User): Observable<User>{
    return null;
  }
}
