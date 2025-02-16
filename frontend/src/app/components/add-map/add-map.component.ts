import { Component, Inject, inject, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat, toLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.component.html',
  styleUrls: ['./add-map.component.scss']
})
export class AddMapComponent implements OnInit {

  http = inject(HttpClient);
  map!: Map;

  params :  any;
  studentName: string = "John Locke";
  studentAddr: string = '';
  latitude: number = 25;
  longitude: number = 85;
  markerFeature!: Feature;
  profilePic : string='';

  constructor(private _DataService: DataService, public dialogRef: MatDialogRef<AddMapComponent>, @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.params = data.params
    this.studentName = data.params.data['firstName']+" "+data.params.data['lastName'];
    this.profilePic = data.params.data['profile'];
    this.extractLatLong(data.params.value);
  }


  ngOnInit(): void {

    //this.getAddress(this.latitude, this.longitude);
    console.log(this.params)
    //this.LoadUsers();
    this.initializeMap();
  }

  /*LoadUsers() {
    this._DataService.getUsers().subscribe(
      (data: any) => {
        console.log('API Response:', data);
        //this.rowData = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }*/

  initializeMap() {
    

    this.markerFeature = new Feature({
      geometry: new Point(fromLonLat([this.longitude, this.latitude])),
      name: 'Location'
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        scale: 1.2,
        src: 'data:image/svg+xml;base64,' + btoa(`
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style="stop-color: lightblue; stop-opacity: 1" />
                <stop offset="70%" style="stop-color: blue; stop-opacity: 1" />
                <stop offset="100%" style="stop-color: black; stop-opacity: 1" />
              </radialGradient>
            </defs>
            <circle cx="16" cy="16" r="15" fill="url(#gradient)" />
          </svg>
        `)
      })
    });

    this.markerFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [this.markerFeature]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([this.longitude, this.latitude]),
        zoom: 14
      })
    });

    this.map.on('click', (event) => {
      const coordinates = event.coordinate;
      const lonLat = toLonLat(coordinates);

      this.latitude = lonLat[1];
      this.longitude = lonLat[0];

      this.updateMarker();
    });
  }

  updateMarker() {
    this.markerFeature.setGeometry(new Point(fromLonLat([this.longitude, this.latitude])));
    this.map.getView().setCenter(fromLonLat([this.longitude, this.latitude]));
    //this.getAddress(this.latitude, this.longitude);
  }


  getAddress(lat: number, lon: number) {
    const url = `http://api.positionstack.com/v1/reverse?access_key=d72c6b9912f63eb9912d54fefcf89c7d&query=${lat},${lon}`;

    this.http.get(url).subscribe((response: any) => {
      if (response && response.data && response.data.length > 0) {
        
        const result = response.data[0];
        console.log(result)
        this.studentAddr = result.label
      } else {
        this.studentAddr = 'Address not found'
      }
      console.log(this.studentAddr);
    });
  }

  updateAddress()
  {
    alert("updated")
  }

  extractLatLong(coordinates: string) {
    const regex = /([0-9.]+)°\s?([NS]),\s?([0-9.]+)°\s?([EW])/;
    const matches = coordinates.match(regex);
  
    if (!matches) {
      throw new Error('Invalid coordinate format');
    }
  
    this.latitude = parseFloat(matches[1]) * (matches[2] === 'N' ? 1 : -1);
    this.longitude = parseFloat(matches[3]) * (matches[4] === 'E' ? 1 : -1);
    
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
}
