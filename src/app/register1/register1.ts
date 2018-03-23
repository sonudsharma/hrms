export class Register1{

    id: number;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    gender: String;
    user: String;
    s1: String;

   // constructor(id:number, firstName:string, lastName:string, email:string, password:string, gender:string, user:string){

      //  this.id = id;
      //  this.firstName = firstName;
      //  this.lastName = lastName;
      //  this.email = email;
       // this.password = password;
      //  this.gender = gender;
       // this.user = user;
   //}

   constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
}
}