import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RentalListComponent } from '../rental-list/rental-list.component';
import { RentalListItemComponent } from '../rental-list-item/rental-list-item.component';
import { RenalDetailComponent } from '../renal-detail/renal-detail.component';
import { Rental } from '../shared/rental.model';
import { RentalComponent } from './rental.component';
import { RentalService } from '../shared/rental.service';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'rentals', component:RentalComponent,
   children:[
     {path:'', component:RentalListComponent},
     {path:':rentalId', component:RenalDetailComponent}
   ]},
];

@NgModule({ 
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,RenalDetailComponent
  
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  providers:[RentalService]
})
export class RentalModule { }
