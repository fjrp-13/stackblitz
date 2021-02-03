import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formContacto: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.formContacto = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]], // https://www.w3resource.com/javascript/form/email-validation.php
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get isNameInvalid() {
    return this.formContacto.get('name').invalid && this.formContacto.get('name').touched;
  }

  get isEmailInvalid() {
    return this.formContacto.get('email').invalid && this.formContacto.get('email').touched;
  }

  get isSubjectInvalid() {
    return this.formContacto.get('subject').invalid && this.formContacto.get('subject').touched;
  }
  get isMessageInvalid() {
    return this.formContacto.get('message').invalid && this.formContacto.get('message').touched;
  }

  submit() {
    if (this.formContacto.invalid) {
      // Si el form es inválido, márcamos los controles como "touched" para que se marquen/muestren los errores
      return Object.values(this.formContacto.controls).forEach( control => {
        // if (control instanceof FormGroup) {
          // Object.values(control.controls).forEach( control => { control.markAsTouched()});
        // } else {
          control.markAsTouched();
        // }
      })
    }

    // Posteo
    this.formContacto.reset();
    this.formSubmitted = true;
  }
}
