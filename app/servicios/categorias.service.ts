import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriasService {

  constructor(private http: Http) { }


  categorias: any;

  getCategorias() {
    return this.http.get("http://localhost/RestBackEnd/Controllers/categorias/categoriasController.php?id=getCategorias")
      .map(resultado => {
        this.categorias = resultado;
        if (this.categorias._body !== 0) {
          return this.categorias.json();

        }
      })
  }


  getCat: any;
  getCategoriasId(idcategoria) {
    return this.http.post("http://localhost/RestBackEnd/Controllers/categorias/getCategoriasontroller.php/", { 'idcategoria': idcategoria })
      .map(res => {
        this.getCat = res;
        return this.getCat.json();
      });
  }

  borrarCat(idcategoria) {
    return this.http.post("http://localhost/RestBackEnd/Controllers/categorias/borrarCategoriaController.php?id=borrarCat/", { 'idcategoria': idcategoria })
      .map(() => this.getCategorias());



  }

}
