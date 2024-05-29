import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [],
  templateUrl: './student-table.component.html',
  styles: ``
})
export class StudentTableComponent {
  @Input() data: any = [];
}
