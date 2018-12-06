import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Route[] =
[
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
