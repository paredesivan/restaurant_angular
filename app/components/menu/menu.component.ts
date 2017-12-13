import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

})
export class MenuComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit() {
  }

  salir() {
    console.log('Salioooo...');

    localStorage.removeItem('usuario');
    this.ruta.navigate(['/login']);
  }
}
