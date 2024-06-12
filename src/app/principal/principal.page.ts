import { UserService } from './../servicios/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../servicios/peliculas.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  datos:any;
  movies:any;

  constructor(private router:Router,
    private userService:UserService,
    private peliculasService:PeliculasService) { }

  ngOnInit() {
    this.getUsers();
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }

  getUsers(){
    this.userService.getUser().subscribe({
      next:(data:any)=>{
        this.datos = data.users
      },
      error:(error:any)=>{
        debugger
      }
    })
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe({
      next:(data:any)=>{
       debugger
      },
      error:(error:any)=>{
        debugger
      }
    })
  }

  getMovies(){
    this.peliculasService.getMovie().subscribe({
      next : (data:any)=>{
        this.movies = data.results;
      },error:(error:any)=>{
        debugger
      }
    })
  }

}
