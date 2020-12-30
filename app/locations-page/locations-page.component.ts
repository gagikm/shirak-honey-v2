import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { Location } from '../location';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css']
})
export class LocationsPageComponent implements OnInit {

	locations: Location[];

  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
  	this.getLocations();
  }

  getLocations(): void {
  	this.locations = this.locationsService.getLocations();
  			
  }

}
