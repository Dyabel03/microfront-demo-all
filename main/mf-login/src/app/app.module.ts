import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGateway } from './domain/models/Login/gateway/login-gateway';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginService } from './infraestructure/driven-adapter/login-api/login-api.service';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: LoginGateway, useClass: LoginService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
