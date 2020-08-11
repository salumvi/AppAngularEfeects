import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';


// definicion de rutas:

const rutas: Routes =[
  {path: 'home',component: ListaComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
