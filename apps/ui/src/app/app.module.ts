import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AuthModule, authRoutes} from "./auth.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{path: 'auth', children: authRoutes}]),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
