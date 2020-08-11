import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects {

    constructor(
        private acctions$: Actions,
        private us: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.acctions$.pipe(
            ofType(usuarioActions.cargarUsuarios), // para l accion que me interesa excuchar
            // tap(data => console.log('effect', data)),
            mergeMap( () => this.us.getUsers()
                    .pipe(
                        //  tap(data => console.log('getuser Effect', data)),
                        map(users => usuarioActions.cargarUsuariosSuccess({ usuarios: users })),
                        catchError(err => of(usuarioActions.cargarUsuariosError({ 
                                        payload: err
                                    })))
                        )
            )
        )
    );

}