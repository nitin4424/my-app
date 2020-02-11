import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationFromComponent } from './validation-from/validation-from.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
   { path: 'login', component: ValidationFromComponent}, 
   { path: 'register', component: RegisterComponent}, 
   { path: 'getusers', component: UsersComponent, canActivate: [AuthGuard] },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] } 
    /* { path:  '',redirectTo:  '/login', pathMatch:  'full' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
