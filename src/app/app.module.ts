import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DeprtmentComponent } from './deprtment/deprtment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { UserListComponent } from './user-list/user-list.component';
import { ServerService } from './server.service';


@NgModule({
  declarations: [
    AppComponent,
    DeprtmentComponent,
    routingComponents,
    PageNotFoundComponent,
    Login1Component,
    Register1Component,
    UserListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 