import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
// import { AuthService } from '../../services/auth.service';
// import { LoadingController } from '@ionic/angular';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AlertController } from '@ionic/angular';
// import { ActionSheetController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {

  zoom: number = 8;

  lat: number = 20.6668205;
  lng: number = -103.3918228;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
	  {
		  lat: this.lat,
		  lng:this.lng,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
  
  
  constructor(private geolocation: Geolocation) {}

  async getMyLocation() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then(location => {
      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude
    })
  }

  addresses: string[] = [];
  selectedAddress = null;

  onSelect(address: string) {
    this.selectedAddress = address;
    this.addresses = [];
  }
}

  // just an interface for type safety.
  interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
  }
  