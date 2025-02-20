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
import { DataService } from '../../services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LocationService } from 'src/app/services/location.service';


@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.component.html',
  styleUrls: ['./add-map.component.scss']
})
export class AddMapComponent implements OnInit {

  http = inject(HttpClient);
  loc = inject(LocationService)
  map!: Map;

  params: any;
  studentId : any;
  studentName: string = "";
  studentAddr: string = '';
  latitude: number = 25;
  longitude: number = 85;
  markerFeature!: Feature;
  profilePic: string = '';

  constructor(private _DataService: DataService, public dialogRef: MatDialogRef<AddMapComponent>, @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.params = data.params
    this.studentName = data.params.data['firstName'] + " " + data.params.data['lastName'];
    this.profilePic = data.params.data['profile'];
    this.studentId=data.params.data['studentId'];
    this.latitude =this.loc.extractLatLong(data.params.value)[0] ;
    this.longitude=this.loc.extractLatLong(data.params.value)[1];
  }

  ngOnInit(): void {
    this.getAddrText();
    this.initializeMap();
  }

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
    this.getAddrText();
    
  }

  getAddrText()
  {
    this.loc.getAddress(this.latitude,this.longitude).subscribe((e:any)=>{
      this.studentAddr=e.data[0].label;
    });
  }

  updateAddress() {
    const latDirection = this.latitude >= 0 ? "N" : "S";
    const longDirection = this.longitude >= 0 ? "E" : "W";
    const coordinates = `${Math.abs(this.latitude).toFixed(4)}° ${latDirection}, ${Math.abs(this.longitude).toFixed(4)}° ${longDirection}`;
    this.loc.updateUserAddress(this.studentId, coordinates).subscribe(response => {
      this.dialogRef.close();
      window.location.reload();
    }, (error: any) => {
      console.error('Error updating Address', error);
    });
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }

}
