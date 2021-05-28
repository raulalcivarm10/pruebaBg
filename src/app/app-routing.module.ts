import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from  './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { AuthGuard } from '../../security/AuthGuard';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoSeleccionadoComponent } from './components/producto-seleccionado/producto-seleccionado.component';

const routes: Routes = [
  {path: '', redirectTo: 'productos', pathMatch: 'full'},
  /*{path: 'productos', component: ListaProductosComponent},*/
  {path: 'login', component: LoginComponent},
  {path: 'productos', component: ProductoSeleccionadoComponent},
  {path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HomeComponent];
