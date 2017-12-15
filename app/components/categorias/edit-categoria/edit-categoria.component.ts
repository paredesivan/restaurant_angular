import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CategoriasService } from '../../../servicios/categorias.service';
import { Categorias } from '../../../categorias';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styles: []
})
export class EditCategoriaComponent implements OnInit {

  constructor(
    private ruta: Router,
    private router: ActivatedRoute,
    private servicio: CategoriasService
  ) { }

  ngOnInit() {
    this.getIdCategorias();
  }


  model = new Categorias();
  idcategoria = this.router.snapshot.params;

  getIdCategorias() {
    this.servicio.getCategoriasId(this.idcategoria.idcategoria)
      .subscribe(respuesta => {
        this.model = respuesta;
        console.log(this.model)
        console.log(this.idcategoria)

      })
  }
  salir() {
    // console.log('Salioooo...');

    localStorage.removeItem('usuario');
    localStorage.removeItem('idusuario');
    this.ruta.navigate(['/login']);
  }

}
