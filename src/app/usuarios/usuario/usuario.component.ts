import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  loading = false;
  error: any;
  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }


  routerSubs: Subscription;

  ngOnInit(): void {

    this.router.params.pipe().subscribe(({id})=>{
      this.store.dispatch(cargarUsuario({id}));

      this.store.select('usuario').subscribe(({user, loading, error})=> {
        this.error = error;
        this.loading = loading;
        this.usuario = user;
      })
      
    } )
  }
  ngOnDestroy(): void {
    this.routerSubs?.unsubscribe();
  }

}
