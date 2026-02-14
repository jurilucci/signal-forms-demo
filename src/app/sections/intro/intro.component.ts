import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [FormField],
  templateUrl: './intro.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {
  /** Form model: writable signal che inizializza il form. Il tipo del form è inferito da qui. */
  loginModel = signal<LoginData>({
    email: '',
    password: ''
  });

  /** form(model) crea un FieldTree: struttura ad albero che rispecchia il modello. Accesso: loginForm.email, loginForm.password */
  loginForm = form(this.loginModel);

  /** Aggiornamento programmatico: modifica il model → il form si aggiorna (e viceversa). */
  fillSample(): void {
    this.loginModel.update(m => ({
      ...m,
      email: 'alice@example.com',
      password: 'secret'
    }));
  }

  resetForm(): void {
    this.loginModel.set({ email: '', password: '' });
  }
}
