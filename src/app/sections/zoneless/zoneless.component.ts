import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-zoneless',
  standalone: true,
  templateUrl: './zoneless.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonelessComponent {
  /** Contatore per dimostrare che la change detection funziona senza Zone.js */
  count = signal(0);
  /** Timestamp dell'ultimo aggiornamento (per mostrare reattività) */
  lastUpdate = signal<string>('—');

  increment(): void {
    this.count.update(c => c + 1);
    this.lastUpdate.set(new Date().toLocaleTimeString('it-IT'));
  }

  reset(): void {
    this.count.set(0);
    this.lastUpdate.set('—');
  }
}
