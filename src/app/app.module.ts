import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RentalModule } from './components/rentals/rental/rental.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TemptComponent } from './tempt/tempt.component';
// root module
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),RentalModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],  
})
export class AppModule { }
