import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {

    constructor(
        private acctions$: Actions,
        private us: UsuarioService
    ) { }

    cargarUsuario$ = createEffect(
        () => this.acctions$.pipe(
            ofType(usuarioActions.cargarUsuario), // para l accion que me interesa excuchar
            // tap(data => console.log('effect', data)),
            mergeMap( (props) => this.us.getUserById(props.id)
                    .pipe(
                        //  tap(data => console.log('getuser Effect', data)),
                        map(user => usuarioActions.cargarUsuarioSuccess({ usuario: user })),
                        catchError(err => of(usuarioActions.cargarUsuarioError({
                                        payload: err
                                    })))
                        )
            )
        )
    );

}