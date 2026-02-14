import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-angular-mcp',
  standalone: true,
  templateUrl: './angular-mcp.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularMcpComponent {}
