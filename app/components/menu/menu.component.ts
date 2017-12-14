import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

})
export class MenuComponent implements OnInit {

  constructor(private ruta: Router) { }

  public usuario: string;
  public id: any;
  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this.id = localStorage.getItem('id');
  }



  salir() {
    // console.log('Salioooo...');

    localStorage.removeItem('usuario');
    localStorage.removeItem('idusuario');
    this.ruta.navigate(['/login']);
  }
}
