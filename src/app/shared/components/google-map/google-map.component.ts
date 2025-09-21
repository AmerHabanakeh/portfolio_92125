import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = { lat: 33.5138, lng: 36.2765 };
  zoom = 16; // Closer zoom to show the location clearly

  marker = {
    position: { lat: 33.5138, lng: 36.2765 },
    title: 'J-ROZA, Damascus, Syria',
    options: {
      animation: google.maps.Animation.DROP,
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
      }
    }
  };

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'satellite',
    zoomControl: true,
    scrollwheel: true,
    streetViewControl: true,
    fullscreenControl: true,
    styles: [
      {
        "featureType": "poi",
        "stylers": [{ "visibility": "off" }]
      },
      {
        "featureType": "transit",
        "stylers": [{ "visibility": "off" }]
      }
    ]
  };
}
