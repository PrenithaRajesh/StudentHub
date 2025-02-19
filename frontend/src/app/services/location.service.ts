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

  getAddress(lat: number, lon: number) 
  {
    const url = `http://api.positionstack.com/v1/reverse?access_key=d72c6b9912f63eb9912d54fefcf89c7d&query=${lat},${lon}`;

    this.http.get(url).subscribe((response: any) => {
      if (response && response.data && response.data.length > 0) {
        const result = response.data[0];
        console.log(result)
        return result.label
      } else {
        return 'Address not found';
      }
    });
    return 'err';
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
