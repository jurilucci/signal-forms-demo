import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [FormField],
  templateUrl: './validation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationComponent {
  loginModel = signal<LoginData>({ email: '', password: '' });

  /** Secondo argomento di form(): funzione schema che riceve il path e applica i validatori. */
  loginForm = form(this.loginModel, (f) => {
    required(f.email, { message: 'Email richiesta' });
    email(f.email, { message: 'Inserisci un\'email valida' });
    required(f.password, { message: 'Password richiesta' });
    minLength(f.password, 8, { message: 'Minimo 8 caratteri' });
  });
}
