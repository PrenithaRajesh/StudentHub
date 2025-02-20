import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'http://localhost:5000/api/User';

  // Subject to notify about user changes
  private userChangeSource = new Subject<void>();
  userChanged$ = this.userChangeSource.asObservable();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUsers`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addUser`, user).pipe(
      tap(() => this.notifyUserChange()) // Notify components after adding
    );
  }

  updateUser(id: any, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateUser`, user).pipe(
      tap(() => this.notifyUserChange()) // Notify components after updating
    );
  }

  deleteUser(studentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteUser/${studentId}`).pipe(
      tap(() => this.notifyUserChange()) // Notify components after deleting
    );
  }

  // Emit event when user data changes
  notifyUserChange() {
    this.userChangeSource.next();
  }
}
