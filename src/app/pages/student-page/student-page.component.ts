import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { StudentModel } from '../../model/studentModel';
import { StudentTableComponent } from '../../components/student-table/student-table.component';
import { SlideBarComponent } from '../../components/global/slide-bar/slide-bar.component';
import { CardComponent } from '../../components/global/card/card.component';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [StudentTableComponent, SlideBarComponent, CardComponent],
  templateUrl: './student-page.component.html',
  styles: ``
})
export class StudentPageComponent {

  apiService = inject(ApiServiceService);

  students: any = [];

  fecthData() {
    this.apiService.getData().subscribe((data: any) => {
      this.students = data.map((student: any) => StudentModel.fromJson(student));
    });
  }

  ngOnInit(): void {
    this.fecthData();
  }
}
