import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { FormValueControl } from '@angular/forms/signals';
import { CustomLabelInputComponent } from './custom-label-input.component';

interface DemoData {
  name: string;
  email: string;
}

@Component({
  selector: 'app-custom-control',
  standalone: true,
  imports: [FormField, CustomLabelInputComponent],
  templateUrl: './custom-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomControlComponent {
  model = signal<DemoData>({ name: '', email: '' });

  demoForm = form(this.model, (f) => {
    required(f.name, { message: 'Nome richiesto' });
    required(f.email, { message: 'Email richiesta' });
  });
}
