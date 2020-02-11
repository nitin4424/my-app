import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModelDrivenFbComponent } from './model-driven-fb/model-driven-fb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidationFromComponent } from './validation-from/validation-from.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule }  from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenFormComponent,
    ModelDrivenFbComponent,
    ValidationFromComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
