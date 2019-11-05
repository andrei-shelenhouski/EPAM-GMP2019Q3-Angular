import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { CoursesListSearchComponent } from './components/courses-list-search/courses-list-search.component';

@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, CoursesListSearchComponent],
  imports: [
    SharedModule,
    CourseRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CourseModule { }