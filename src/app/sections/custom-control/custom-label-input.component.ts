import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import type { FormValueControl } from '@angular/forms/signals';

/** Custom control compatibile con [formField]: implementa FormValueControl<string>. Serve solo value = model(). */
@Component({
  selector: 'app-custom-label-input',
  standalone: true,
  template: `
    <label class="flex flex-col gap-1.5 text-sm">
      <span class="text-zinc-500">{{ label() }}</span>
      <input
        type="text"
        [value]="value()"
        (input)="value.set($any($event.target).value)"
        [disabled]="disabled()"
        [attr.aria-invalid]="invalid()"
        class="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-300 focus:border-blue-500 focus:outline-none"
      />
      @if (invalid() && touched() && errors().length) {
        <span class="text-sm text-red-400">{{ errors()[0].message }}</span>
      }
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomLabelInputComponent implements FormValueControl<string> {
  readonly value = model<string>('');
  readonly label = input<string>('');

  readonly disabled = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly touched = input<boolean>(false);
  readonly errors = input<readonly { kind: string; message?: string }[]>([]);
}
