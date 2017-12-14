
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ReservasComponent } from './components/reservas/reservas.component';

// guard para la sesion
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';

const APP_ROUTES: Routes = [
  { path: 'categorias', component: CategoriasComponent, canActivate: [LoginGuard] },
  { path: 'productos', component: ProductosComponent, canActivate: [LoginGuard] },
  { path: 'reservas', component: ReservasComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
