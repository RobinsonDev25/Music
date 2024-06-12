import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient:HttpClient) { }

  getMovie(){
    return this.httpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=8af20e298b986607f8dbe9f59984dfe0&language=es-ES')
  }

  searchMovie(nombre:string){
    return this.httpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=8af20e298b986607f8dbe9f59984dfe0&language=en-US')
  }
}