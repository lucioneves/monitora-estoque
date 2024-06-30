import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { UsersService } from '../../service/users.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatIconModule,
    MatRadioModule

  
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{


  form: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      // Lógica para enviar os dados para o serviço
      this.usersService.addUser(this.form.value).subscribe(response => {
        console.log('User added successfully', response);
        this.form.reset();
      });
    }
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onClick(): void {
    // Lógica para o botão "Salvar"
    this.onSubmit();
  }
  
}

