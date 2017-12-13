import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  login(form: NgForm) {
    // console.log(form.value);
    if (form.value.usuario === 'admin' && form.value.password === '1234') {

      localStorage.setItem('usuario', form.value.usuario);
      this.route.navigate(['/reservas']);
    }

  }

}
