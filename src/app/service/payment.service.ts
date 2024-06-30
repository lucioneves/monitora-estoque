import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../interface/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:3000/payments';
  private http!: HttpClient;

  constructor(private injector: Injector) {}

  private getHttpClient(): HttpClient {
    if (!this.http) {
      this.http = this.injector.get(HttpClient);
    }
    return this.http;
  }

  addPayment(payment: Payment): Observable<Payment> {
    return this.getHttpClient().post<Payment>(this.apiUrl, payment);
  }

  getPayments(): Observable<Payment[]> {
    return this.getHttpClient().get<Payment[]>(this.apiUrl);
  }
}
