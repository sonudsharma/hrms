export class User{

    firstName: String;
    lastName: String;
    email: String;
    password: String;
    gender: String;
    user: String;

   constructor(firstName:String, lastName:String, email:String, password:String, gender:String, user:String){

    
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.user = user;
   }
}