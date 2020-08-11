import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading = false;
  error: any;
  constructor(private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    // this.us.getUsers()
    //   .subscribe((users: Usuario[]) => {
    //     this.usuarios = users;
    //   });
    this.store.dispatch(cargarUsuarios());
    this.store.select('usuarios').subscribe(({users, loading, error}) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error;

      });

  }

}
