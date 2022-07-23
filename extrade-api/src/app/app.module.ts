import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ResultComponent } from './result/result.component';
import { AppRoutingModule } from './appRouting';
import { UserServices } from './Services/UserServices';
import { UserComponent } from './User/user.component';
import { LogInComponent } from './Account/log-in/log-in.component';
import { AccountService } from './Services/Account.service';
import { CollectionServices } from './Services/CollectionServices';
import { CollectionComponent } from './Component/collection/collection.component';
<<<<<<< HEAD:extrade-api/src/app/app.module.ts
import { AuthService } from './Services/Auth.service';
=======
import { GetCollectionsComponent } from './Component/GetCollections/get-collections/get-collections.component';
>>>>>>> e8b05d0d51893d58624d96f21e185b251955aed1:extrade api/src/app/app.module.ts


@NgModule({
  declarations: [
    
    AppComponent,
    UserComponent,
    ResultComponent,
    LogInComponent,
    CollectionComponent,
    GetCollectionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserServices,AccountService,CollectionServices,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
