import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramModel, ProgramsFacade } from '@humanitec/programs';
import { NotificationService } from '@humanitec/core-data';
import { ActivityModel, ActivityService } from '@humanitec/activities';

@Component({
  selector: 'humanitec-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programs$: Observable<ProgramModel[]>;
  activities$: Observable<ActivityModel[]>;
  currentProgram$: Observable<ProgramModel>;

  constructor(
    private activityService: ActivityService,
    private facade: ProgramsFacade,
    private ns: NotificationService
  )
  {
    this.programs$ = facade.programs$;
    this.currentProgram$ = facade.currentProgram$
  }

  ngOnInit() {
    this.getPrograms();
    this.resetCurrentProgram();
    this.getActivities();
  }

  resetCurrentProgram() {
    this.facade.selectProgram(null)
  }

  selectProgram(program) {
    this.facade.selectProgram(program.id);
  }

  cancel(program) {
    this.resetCurrentProgram();
  }

  getActivities(){
    this.activities$ = this.activityService.all();
  }

  getPrograms() {
    this.facade.getPrograms();
  }

  saveProgram(program) {
    if (!program.id) {
      this.createProgram(program);
    } else {
      this.updateProgram(program);
    }
  }

  createProgram(program) {
    this.facade.createProgram(program);
    // delete later
    this.ns.emit('ProgramModel created!');
    this.resetCurrentProgram();
  }

  updateProgram(program) {
    this.facade.updateProgram(program);
    // delete later
    this.ns.emit('Project updated!');
    this.resetCurrentProgram();
  }

  deleteProgram(program) {
    this.facade.deleteProgram(program);
    // delete later
    this.ns.emit('ProgramModel deleted!');
    this.resetCurrentProgram();
  }
}
