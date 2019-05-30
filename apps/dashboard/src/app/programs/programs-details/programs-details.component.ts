import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProgramModel } from '@humanitec/programs';
import { ActivityModel } from '@humanitec/activities';

@Component({
  selector: 'humanitec-programs-details',
  templateUrl: './programs-details.component.html',
  styleUrls: ['./programs-details.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProgramsDetailsComponent {
  originalTitle: string;
  selectedProgram: ProgramModel;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() activities: ActivityModel[];
  @Input() set program(value: ProgramModel) {
    if (value) {this.originalTitle = value.title;}
    this.selectedProgram = Object.assign({}, value)
  }
}


