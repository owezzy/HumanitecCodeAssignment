import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LIST_ANIMATION } from './programs-list.animation';
import { ProgramModel } from '@humanitec/programs';

@Component({
  selector: 'humanitec-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss'],
  animations: [LIST_ANIMATION],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProgramsListComponent implements OnInit {
  @Input() programs: ProgramModel[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  animationsDisabled = true;

  trackProgram(index, program) {
    return program.id;
  }

  ngOnInit() {
    setTimeout(()=> {
      this.animationsDisabled = false;
    }, 500)
  }

  prepareListState () {
    return this.programs ? this.programs.length : 'pending';
  }

}
