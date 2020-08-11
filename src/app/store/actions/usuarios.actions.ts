import { createAction , props} from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuario');
export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Success Usuario',
    props<{usuarios: Usuario[]}>()
    );
export const cargarUsuariosError = createAction(
        '[Usuarios] Cargar Error Usuario',
        props<{payload: any}>()
        );