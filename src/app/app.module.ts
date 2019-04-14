import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"; // Import reactive forms
import { environment } from "src/environments/environment"; // import to be able to use firebase modules
import { AngularFireModule } from "@angular/fire"; // import Modules to connect firebase to the app
import { AngularFirestoreModule } from "@angular/fire/firestore"; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageAppComponent } from './home-page-app/home-page-app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from './shared/orders.service';      // import service

@NgModule({
  declarations: [
    AppComponent,
    HomePageAppComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    // Add reactive forms
    AngularFireModule.initializeApp(environment.firebaseConfig), // add module with configs object from environment.ts to connect app and firebase
    AngularFirestoreModule    // import Firebase module
  ],
  providers: [OrdersService], //add service here
  bootstrap: [AppComponent]
})
export class AppModule { }
