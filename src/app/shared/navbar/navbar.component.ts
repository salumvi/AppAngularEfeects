import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }


  irUsuario(idUsuario: number){
   
    if(!idUsuario){return ;}
    this.ruta.navigate([`usuario/${idUsuario}`]);
  }
}
