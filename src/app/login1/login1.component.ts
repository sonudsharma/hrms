import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  email: String;
  password: String;

   onSignip(form: NgForm){
     const email = form.value.email;
     const password = form.value.password;
  }

  login(): void {
              if(this.email == 'admin' && this.password == 'admin'){
                      this.router.navigate(["user"]);
              }else{
                      alert("Invalide Credentials");
              }
        }
  }
