import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ActivityModel } from '@humanitec/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  model = 'activities';

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<ActivityModel[]>(this.getUrl());
  }

  load(id) {
    return this.http.get<ActivityModel>(this.getUrlForId(id));
  }

  create(activity: ActivityModel) {
    return this.http.post(this.getUrl(), activity);
  }

  update(activity: ActivityModel) {
    return this.http.patch(this.getUrl(), activity);
  }

  delete(activity: ActivityModel) {
    return this.http.delete(this.getUrlForId(activity.id));
  }
}
