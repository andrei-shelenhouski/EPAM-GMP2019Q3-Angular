import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../models/course.class';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent {
  @Input()
  course: ICourse;

  @Output()
  deleteCourseEvt: EventEmitter<ICourse> = new EventEmitter();
  @Output()
  editCourseEvt: EventEmitter<ICourse> = new EventEmitter();

  onEdit() {
    this.editCourseEvt.emit(this.course);
  }

  onDelete() {
    this.deleteCourseEvt.emit(this.course);
  }
}
