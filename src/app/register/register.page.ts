import { Router } from '@angular/router';
import { UserService } from './../servicios/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router,
    private userService:UserService) { }

  ngOnInit() {
  }

  register(user:any, email:any, password:any){
    this.userService.register(user.value, email.value, password.value).subscribe({
      next:(data:any)=>{
        localStorage.setItem('user', data.users.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.users.id);
        this.router.navigateByUrl('/principal');
      },
      error:(error)=>{
        debugger
      }
    })
  }

}
