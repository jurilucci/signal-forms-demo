import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tailwind',
  standalone: true,
  templateUrl: './tailwind.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TailwindComponent {}
