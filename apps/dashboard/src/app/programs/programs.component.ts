import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramModel, ProgramsFacade } from '@humanitec/programs';
import { ActivityModel, ActivitiesFacade } from '@humanitec/activities';

@Component({
  selector: 'humanitec-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProgramsComponent implements OnInit {

  programs$: Observable<ProgramModel[]> = this.programsFacade.allPrograms$;
  activities: Observable<ActivityModel[]> = this.activitiesFacade.allActivities$;
  currentProgram$: Observable<ProgramModel> =this.programsFacade.currentProgram$;

  constructor(
    private programsFacade: ProgramsFacade,
    private activitiesFacade: ActivitiesFacade
  ) {}

  ngOnInit() {
    this.programsFacade.loadPrograms();
    this.activitiesFacade.loadActivities();
    this.programsFacade.mutations$.subscribe(_ => this.resetCurrentProgram());
    this.resetCurrentProgram();
  }

  resetCurrentProgram() {
    this.selectProgram({id: null})
  }

  selectProgram(program) {
    this.programsFacade.selectProgram(program.id);
  }

  updateProgram(program){
    if (!program.id) {
      this.programsFacade.addProgram(program);
    } else {
      this.programsFacade.updateProgram(program)
    }
  }

  deleteProgram(program) {
    this.programsFacade.deleteProgram(program)
  }
}
