import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramModel, ProgramsFacade } from '@humanitec/programs';
import { ActivityModel } from '@humanitec/activities';

@Component({
  selector: 'humanitec-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programs$: Observable<ProgramModel[]> = this.programsFacade.allPrograms$;
  // activities$: Observable<ActivityModel[]> = this.programsFacade.allActivities$
  currentProgram$: Observable<ProgramModel> =this.programsFacade.currentProgram$;

  constructor(private programsFacade: ProgramsFacade) {}

  ngOnInit() {
    this.programsFacade.loadPrograms();
    this.programsFacade.mutations$.subscribe(_ => this.resetCurrentProgram());
    this.resetCurrentProgram();
     //this.getActivities();
  }

  resetCurrentProgram() {
    this.selectProgram({id: null})
  }

  selectProgram(program) {
    this.programsFacade.selectProgram(program.id);
  }

  saveProgram(program){
    if (!program.id) {
      this.programsFacade.addProgram(program);
    } else {
      this.programsFacade.deleteProgram(program)
    }
  }

  deleteProgram(program) {
    this.programsFacade.deleteProgram(program)
  }
}
