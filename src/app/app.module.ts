import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomepageComponent } from './homepage/homepage.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationComponent } from './Customer/registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Customer/login/login.component';
import { FormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';

import { AddtocartComponent } from './addtocart/addtocart.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
<<<<<<< HEAD
import { ViewcartComponent } from './viewcart/viewcart.component';

=======
import { ViewcartComponent } from './viewcart/ViewcartComponent';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
>>>>>>> 9966705b58067a90e7bc437cc3ec427a92ebfaf4


@NgModule({
  declarations: [
    AppComponent,
     NavbarComponent,
     HomepageComponent,
     SpecificProductComponent,
     LoginComponent,
     RegistrationComponent,
   AdminDashboardComponent,
   AdminLoginComponent,
   MainDashboardComponent,
   RegistrationComponent,
   CustomerOrderComponent,
   AddToCartComponent,
   ChangePasswordComponent,
   AdminRegistrationComponent,
 
   AddtocartComponent,
<<<<<<< HEAD
     ViewcartComponent,
=======
      ViewcartComponent,
      
      OrderHistoryComponent,
>>>>>>> 9966705b58067a90e7bc437cc3ec427a92ebfaf4
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    RouterModule,
    InputGroupModule ,
    InputGroupAddonModule
 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
