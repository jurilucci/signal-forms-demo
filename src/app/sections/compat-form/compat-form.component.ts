import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { compatForm } from '@angular/forms/signals/compat';
import { form, FormField, required } from '@angular/forms/signals';

interface MixedModel {
  /** Campo "normale" Signal Forms */
  name: string;
  /** Campo che resta un FormControl reattivo: compatForm lo integra nel FieldTree */
  age: FormControl<number>;
}

@Component({
  selector: 'app-compat-form',
  standalone: true,
  imports: [FormField],
  templateUrl: './compat-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompatFormComponent {
  /** Model misto: name è un valore, age è un FormControl esistente (es. da Reactive Forms). */
  model = signal<MixedModel>({
    name: '',
    age: new FormControl(5, { validators: Validators.min(3), nonNullable: true })
  });

  /** compatForm(model) crea un form che "srotola" i FormControl: myForm.age().value() è number, non FormControl. */
  mixedForm = compatForm(this.model, (f) => {
    required(f.name, { message: 'Nome richiesto' });
    // Non si possono applicare required/validate ai campi che sono FormControl: la validazione resta sul FormControl.
  });

  /** Accesso al FormControl originale se serve (es. per subscribe). */
  get ageControl(): FormControl<number> {
    return this.model().age;
  }
}
