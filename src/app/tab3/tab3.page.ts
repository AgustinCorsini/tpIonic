import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  form = {
    name: '',
    role: '',
    email: '',
    password: ''
  };

  constructor() {}

  onRegister() {
    // Aquí puedes manejar la lógica de registro, por ejemplo, enviar los datos al backend
    console.log('Formulario de registro enviado:', this.form);
  }
}
