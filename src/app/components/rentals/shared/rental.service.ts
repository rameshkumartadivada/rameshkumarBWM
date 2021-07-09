import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../shared/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private rentals: Rental[] = [
    {
      id: "1",
    title: "Central Apartment 2",
    city: "Los Anglies",
    street: "Main street",
    category: "super luxery",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 2,
    description: "Very nice apartment",
    dailyPrice: 15,
    shared: true,
    createdAt: "24/12/2017"
  },
   {
      id: "2",
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Main street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 2,
    description: "Very nice apartment",
    dailyPrice: 12,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "3",
    title: "Central Apartment 3",
    city: "Bratislava",
    street: "Hlavna",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 2,
    description: "Very nice apartment",
    dailyPrice: 334,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 9,
    description: "Very nice apartment",
    dailyPrice: 33,
    shared: true,
    createdAt: "24/12/2017"
  } 
  ];
  constructor() { }

  public getRentals(){
    return this.rentals;
  }
}
