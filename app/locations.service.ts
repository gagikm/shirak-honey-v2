import { Injectable } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from './store-locations';

@Injectable()
export class LocationsService {

  constructor() { }

  getLocations(): Location[] {
  	return LOCATIONS;
  }

}
