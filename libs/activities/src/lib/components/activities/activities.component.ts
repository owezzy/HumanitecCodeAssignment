import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../../activity-model';
import { ActivitiesFacade } from '../../+state/activities.facade';

@Component({
  selector: 'humanitec-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities$: Observable<ActivityModel[]> = this.activitiesFacade.allActivities$;

  constructor(
    private activitiesFacade: ActivitiesFacade
  ) {
  }

  ngOnInit() {
    this.activitiesFacade.loadActivities();
    this.activitiesFacade.mutation$.subscribe(_ => this.resetCurrentActivity());
    this.resetCurrentActivity();
  }

  resetCurrentActivity() {
    this.selectActivity({ id: null });
  }

  selectActivity(activity) {
    this.activitiesFacade.selectActivity(activity.id);
  }

  saveActivity(activity) {
    if (!activity.id) {
      this.activitiesFacade.addActivity(activity);
    } else {
      this.activitiesFacade.updateActivity(activity);
    }
  }

  deleteActivity(activity) {
    this.activitiesFacade.deleteActivity(activity);
  }
}
