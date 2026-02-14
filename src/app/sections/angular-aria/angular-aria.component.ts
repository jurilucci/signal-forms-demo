import {
  AccordionContent,
  AccordionGroup,
  AccordionPanel,
  AccordionTrigger
} from '@angular/aria/accordion';
import { Listbox, Option } from '@angular/aria/listbox';
import { Menu, MenuItem, MenuContent, MenuTrigger } from '@angular/aria/menu';
import { Tab, TabContent, TabList, TabPanel, Tabs } from '@angular/aria/tabs';
import { Toolbar, ToolbarWidget } from '@angular/aria/toolbar';
import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';

@Component({
  selector: 'app-angular-aria',
  standalone: true,
  imports: [
    Toolbar,
    ToolbarWidget,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabContent,
    AccordionGroup,
    AccordionTrigger,
    AccordionPanel,
    AccordionContent,
    Menu,
    MenuTrigger,
    MenuItem,
    MenuContent,
    Listbox,
    Option
  ],
  templateUrl: './angular-aria.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularAriaComponent {
  /** Tab selezionata (per ngTabList) */
  selectedTab = model<string | undefined>(undefined);
  /** Valori selezionati nella listbox (singola selezione: 0 o 1 elemento) */
  selectedListboxValues = model<string[]>([]);
  /** Azione toolbar ultima (per feedback demo) */
  lastToolbarAction = signal<string | null>(null);
  /** Opzioni per la listbox */
  listboxOptions = ['Opzione A', 'Opzione B', 'Opzione C'];

  onToolbarAction(value: string): void {
    this.lastToolbarAction.set(value);
  }
}
