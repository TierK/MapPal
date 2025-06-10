import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'MapPal';

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {

    const haifaCoordinates = { lat: 32.7940, lng: 34.9896 };

    const mapOptions = {
      center: haifaCoordinates,
      zoom: 12
    };

    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, mapOptions);
      console.log('Google Map successfully initialized!');
    } else {
      console.error('Error: Map element not found.');
    }
  }
}