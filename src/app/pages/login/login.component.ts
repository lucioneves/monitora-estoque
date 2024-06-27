import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   router  = inject(Router);
  
   constructor() {}


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  form = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
     validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    })
  });

  hidePassword = true;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword
  }

  onSubmit() {  
    if (this.form.valid) {
      console.log('Form is valid, navigating to /home');
      this.router.navigate(['/home']);
    } else {
      console.log('Form is invalid');
    }
   
    
  
  }
  onClick() {
    console.log('Botão clicado');
    this.router.navigate(['/home']).then(success => {
      if (success) {
        console.log('Navigation to /home successful');
      } else {
        console.log('Navigation to /home failed');
      }
    }).catch(err => {
      console.log('Navigation error: ', err);
    });
  }

}
