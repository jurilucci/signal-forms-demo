import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';

interface ContactData {
  email: string;
  message: string;
}

@Component({
  selector: 'app-submit-reset',
  standalone: true,
  imports: [FormField],
  templateUrl: './submit-reset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitResetComponent {
  model = signal<ContactData>({ email: '', message: '' });

  contactForm = form(this.model, (f) => {
    required(f.email, { message: 'Email richiesta' });
    email(f.email, { message: 'Email non valida' });
    required(f.message, { message: 'Messaggio richiesto' });
  });

  submitResult = signal<string>('');

  async onSubmit(): Promise<void> {
    this.submitResult.set('');
    await submit(this.contactForm, async () => {
      // submit() ha già: marcato tutti i campi come touched, verificato valid(), impostato submitting a true
      const data = this.contactForm().value();
      this.submitResult.set(`Inviato (simulato): ${data.email} — ${data.message}`);
      // Se ci fossero errori server potresti ritornare: return [{ field: this.contactForm.email, error: { kind: 'server', message: '...' } }];
      return undefined;
    });
  }

  onReset(): void {
    this.contactForm().reset();
    this.submitResult.set('');
  }

  onResetWithValue(): void {
    this.contactForm().reset({ email: '', message: '' });
    this.submitResult.set('');
  }
}
