import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class DataService{
    // DEV 
    private apiUrl = 'http://localhost:5000/api/User';
    constructor(private http:HttpClient){}
    
    getUsers():Observable<any>{
        return this.http.get(`${this.apiUrl}/getUsers`)
    }
    addUser(user: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/addUser`, user);
      }
    
      updateUser(user: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/updateUser`, user);
      }
    
      deleteUser(studentId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/deleteUser/${studentId}`);
      }

}