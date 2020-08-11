import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { Usuario } from '../../models/usuario.model';
import { purgarUsuario } from '../actions/usuario.actions';

export interface UsuarioState {
    id: string;
    user: Usuario;
    loader: boolean;
    loading: boolean;
    error: any;

}

export const UsuarioinitialState: UsuarioState = {
    id: null,
    user: null,
    loader: false,
    loading: false,
    error: null,
}

const _usuarioReducer = createReducer(UsuarioinitialState,

    on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id })),
    on(purgarUsuario, (state ) => ({ ...state, loading: false, id: null, user: null, loader: false })),
    on(cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loader: true,
        user: { ...usuario },
        error: null
    })),
    on(cargarUsuarioError, (state, { payload }) => ({
        ...state,
        loading: false,
        loader: false,
        user: null,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),


);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}