import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://reqres.in/api';
  constructor( public http: HttpClient ) { }

  getUsers(){
    return this.http.get(`${this.url}/users?per_page=6&delay=3`)
      .pipe(map((res: any) => res.data));
  }

  getUserById(id: string){
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(map((res: any) => res.data));
  }
}
