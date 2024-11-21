import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page  {
  form = {
    name: '',
    role: '',
    email: '',
    password: ''
  };

  constructor() { }

  onRegister() {
    // Aquí puedes manejar la lógica de registro, por ejemplo, enviar los datos al backend
    console.log('Formulario de registro enviado:', this.form);
  }

}
