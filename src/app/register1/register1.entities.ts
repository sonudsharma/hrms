import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Register1{

    firstName: String;
    lastName: String;
    email: String;
    password: String;
    gender: String;
    user: String;

   constructor(firstName:string, lastName:string, email:string, password:string, gender:string, user:string){

    
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.user = user;
   }
}