import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5000/api/User';

  extractLatLong(coordinates: string) 
  {
    const regex = /([0-9.]+)°\s?([NS]),\s?([0-9.]+)°\s?([EW])/;
    const matches = coordinates.match(regex);

    if (!matches) {
      throw new Error('Invalid coordinate format');
    }

    var latitude = parseFloat(matches[1]) * (matches[2] === 'N' ? 1 : -1);
    var longitude = parseFloat(matches[3]) * (matches[4] === 'E' ? 1 : -1);

    return [latitude,longitude];

  }

  getAddress(lat: number, lon: number) : Observable<any> 
  {
    const url = `http://api.positionstack.com/v1/reverse?access_key=99e66a9c199bbe579816921c0cca37fe&query=${lat},${lon}`;
    return this.http.get(url);

  }

  updateUserAddress(id: any, address: string): Observable<any> 
  {
    const url = `${this.apiUrl}/updateAddress/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(address);
    return this.http.patch(url, body, { headers });
  }

}
