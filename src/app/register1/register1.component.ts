import { Component, OnInit} from '@angular/core';
import { Register1 } from './register1';
import { User } from '../model/user';
import { ServerService } from '../server.service';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  
  constructor(private serverService: ServerService, private router: Router,private route:ActivatedRoute) {
  // if(this.id){
  // }
  // else{
  //    this.router.navigate(['/user']);
  //  } 
  }
  
  private user: String[];
  private register: Register1;
  private user1:User;
  private user2:User = new User("","","","","","");
  private id: number;
//public user3:User;
 private s1: String=btoa("this.register.password");

  ngOnInit() {
    this.user = ['Doctor','Patient','Admin'];
    this.register = new Register1({firstName:"", lastName:"", email:"", password:"", user: this.user[0], gender:""}); 
   
  
    this.id = this.route.snapshot.params['id']
    this.route.params
    .subscribe(
    (params: Params) => {
       this.id = params['id'];
    }
    );
    console.log(this.id);
    console.log(this.s1);
    
    this.serverService.findUser(this.id).subscribe(
      user=> {
        this.user2=user;
        this.editUser(this.user2);
        return this.user2;
      }
    );
    console.log(this.user2);
  }
  
  
  editUser(user: User){
    this.user2=user;
    console.log(this.user2);
  }
  
  upDate() {
    this.serverService.updateUser(this.user2,this.id).subscribe();
    if (this.user2) {
      this.router.navigate(['/user']);
      window.location.reload();
    }
  }

click(){
  console.log(this.register.user);
  console.log(this.register.firstName);
  console.log(this.register.lastName);
  console.log(this.register.email);
  console.log(this.register.password);
  console.log(this.register.gender);
 this.user1 = new User(this.register.firstName,this.register.lastName,this.register.email,this.register.password,this.register.gender,this.register.user);
 this.serverService.create(this.user1).subscribe();
 this.router.navigate(['/login1']);
}
}
