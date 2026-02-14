import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Theme = 'light' | 'dark' | 'system';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlFlowComponent {
  /** Per @if / @else: mostra o nasconde il messaggio */
  showMessage = signal(true);
  /** Per @for: lista di elementi */
  items = signal<string[]>(['Primo', 'Secondo', 'Terzo']);
  /** Per @switch: tema selezionato */
  theme = signal<Theme>('system');
  /** Per @defer (opzionale): caricamento differito */
  loaded = signal(false);

  toggleMessage(): void {
    this.showMessage.update(v => !v);
  }

  addItem(): void {
    const n = this.items().length + 1;
    this.items.update(list => [...list, `Elemento ${n}`]);
  }

  setTheme(t: Theme): void {
    this.theme.set(t);
  }

  loadLazy(): void {
    this.loaded.set(true);
  }
}
