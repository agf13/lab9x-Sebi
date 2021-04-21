import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";


import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Team} from './team.model';


@Injectable()
export class TeamService {
  private teamUrl = 'http://localhost:8081/api/teams';

  constructor(private httpClient: HttpClient) {
  }

  getTeams(): Observable<Team[]> {
    return this.httpClient
      .get<Array<Team>>(this.teamUrl);

  }

  saveTeam(team: Team): Observable<Team> {
    return this.httpClient
      .post<Team>(this.teamUrl, team);
  }

  // getStudent(id: number): Observable<Student> {
  //   return this.getStudents()
  //     .pipe(
  //       map(students => students.find(student => student.id === id))
  //     );
  // }
  //
  // update(student): Observable<Student> {
  //   const url = `${this.teamUrl}/${student.id}`;
  //   return this.httpClient
  //     .put<Student>(url, student);
  // }

}
