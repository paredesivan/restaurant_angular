import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Rutas
import { APP_ROUTING } from './app.routes';

// guard para la sesiones
import { LoginGuard } from './login.guard';

// para que no vuelva al LoginGuard
import { LogoutGuard } from './logout.guard';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriasComponent,
    ProductosComponent,
    VentasComponent,
    ReservasComponent,
    AdminComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
