import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { Register1 } from '../register1/register1';
import { ServerService } from '../server.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ServerService]
})
export class UserListComponent implements OnInit {
  
  private users: User[];
  private user: User;
    private id: number;
  

  constructor(private serverService: ServerService, private router:Router, private route:ActivatedRoute) {
    this.router=router;
  }

  ngOnInit() {
    this.getAllUser(); 
    
  }

  getAllUser(){
    this.serverService.findAll().subscribe(
      users => {
        this.users=users;
        console.log(this.users);
      },
      err => {
        console.log(err);
      }
    );
  }

    deleteUser(id:number) {
      console.log(id);
      this.serverService.deleteUserById(id).subscribe();
      window.location.reload();
    }

  editUser(id: number){
    console.log(id);
    this.router.navigate(['/register1',id]);
  }
}
