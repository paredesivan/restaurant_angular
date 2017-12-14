import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


// Servicios

import { AdminService } from '../../servicios/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private adminServ: AdminService) { }

  ngOnInit() {

  }

  error: string = '';
  boolean: boolean = false;
  loanding: boolean = false;
  admin: any;


  login(form: NgForm) {
    this.adminServ
      .getAdminService()
      .subscribe(resultado => {
        this.admin = resultado;

        // console.log(form.value.usuario);
        // console.log(resultado[1].nombreusuario);

        for (var i = 0; resultado.length; i++) {
          if (resultado[i].nombreusuario === form.value.usuario &&
            resultado[i].password === form.value.password) {
            this.loanding = true;
            // setTimeout(() => {
            localStorage.setItem('usuario', form.value.usuario),
              localStorage.setItem('idusuario', resultado[i].idusuario),
              this.route.navigate(['/reservas'])

            // }, 1000);


          } else {
            this.boolean = true;
            this.error = "Los Campos ingresados no son correctos."
          }
        }


      })


  }



}
