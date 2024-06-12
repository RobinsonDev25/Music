import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
PeliculasService
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  constructor(private peliculasService:PeliculasService) { }

  movies:any;
  peliculas:any;

  ngOnInit() {
    this.obtenerMovie();
  }

  obtenerMovie(){
    this.peliculasService.getMovie().subscribe({
      next:(data:any)=>{
        this.movies=data.results;
        console.log(data.results);
      },
      error:(error)=>{
      }
      })
  }

  searchMovies(nombre:any){
    this.peliculasService.searchMovie(nombre.value).subscribe({
      next:(data:any)=>{
        this.peliculas=data.results; 
      },
      error:(error)=>{ 
        debugger;
      },
    })
  }

}
