import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Payment } from '../../interface/payment';
import { PaymentService } from '../../service/payment.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatIconModule,
    MatRadioModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {

  }

  loadPayments() {
    this.paymentService.getPayments().subscribe(payments => {
      this.payments = payments;
    });
  }

}
