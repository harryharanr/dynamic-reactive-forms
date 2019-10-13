import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './dynamic-components/input/input.component';
import { ButtonComponent } from './dynamic-components/button/button.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    ButtonComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HomeComponent,
    InputComponent,
    ButtonComponent
  ]
})
export class AppModule { }
