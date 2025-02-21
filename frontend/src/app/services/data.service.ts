import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environment';
import { User, UserToAdd } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = `${environment.apiBaseUrl}/User`;

  private userChangeSource = new Subject<void>();
  userChanged$ = this.userChangeSource.asObservable();

  notifyUserChange() {
    this.userChangeSource.next();
  }

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}/getUsers`);
  }

  addUser(user: UserToAdd) {
    return this.http
      .post(`${this.apiUrl}/addUser`, user)
      .pipe(tap(() => this.notifyUserChange()));
  }
  
  updateUser(id: number, user: User) {
    return this.http
      .put(`${this.apiUrl}/updateUser`, user)
      .pipe(tap(() => this.notifyUserChange()));
  }

  deleteUser(studentId: number) {
    return this.http
      .delete(`${this.apiUrl}/deleteUser/${studentId}`)
      .pipe(tap(() => this.notifyUserChange()));
  }
}
