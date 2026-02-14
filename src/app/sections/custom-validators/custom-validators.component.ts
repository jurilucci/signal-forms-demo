import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required, validate } from '@angular/forms/signals';

interface RegisterData {
  username: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-custom-validators',
  standalone: true,
  imports: [FormField],
  templateUrl: './custom-validators.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomValidatorsComponent {
  model = signal<RegisterData>({
    username: '',
    password: '',
    confirmPassword: ''
  });

  registerForm = form(this.model, (f) => {
    required(f.username, { message: 'Username richiesto' });
    // Custom: nessuno spazio nello username. Il contesto ha value() e valueOf(path).
    validate(f.username, ({ value }) => {
      const v = value();
      if (v.includes(' ')) {
        return { kind: 'no-spaces', message: 'Lo username non può contenere spazi' };
      }
      return undefined;
    });

    required(f.password, { message: 'Password richiesta' });
    required(f.confirmPassword, { message: 'Conferma password richiesta' });
    // Validatore che dipende da un altro campo: valueOf(f.password). La reattività è automatica.
    validate(f.confirmPassword, ({ value, valueOf }) => {
      if (value() !== valueOf(f.password)) {
        return { kind: 'password-mismatch', message: 'Le password non coincidono' };
      }
      return undefined;
    });
  });
}
