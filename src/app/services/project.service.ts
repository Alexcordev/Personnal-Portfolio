import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project';
import {global} from './global';

@Injectable()

export class ProjectService {
  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = global.url;
  }

  testService() {
        return 'Test du Service';

  }

  saveProject(project: Project): Observable<any> {
    const params = JSON.stringify(project);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'save-project', params, {headers});
  }
}
