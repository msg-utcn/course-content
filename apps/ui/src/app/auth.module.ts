import {NgModule} from "@angular/core";
import {LoginComponent} from "./containers/login/login.component";
import {Route, RouterModule} from "@angular/router";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.modules";
import {ReactiveFormsModule} from "@angular/forms";

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }]
//homework, create register component

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule, ReactiveFormsModule],
  declarations: [LoginComponent, LoginFormComponent],
  providers: []
})
export class AuthModule {

}
