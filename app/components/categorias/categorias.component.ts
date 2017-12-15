import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'

})
export class CategoriasComponent implements OnInit {

  constructor(private getServ: CategoriasService) { }

  ngOnInit() {
    this.getCategorias();

  }

  categorias: any;

  getCategorias() {

    this.getServ.getCategorias().subscribe(resulatdo => {
      this.categorias = resulatdo;
    })
  }

  borrarCat(idcategoria) {
    // console.log(idcategoria);
    this.getServ.borrarCat(idcategoria).subscribe(() => {
      this.getCategorias();
    })
  }
}
