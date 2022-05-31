import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserFormComponent } from './modules/user-form/user-form.component';
import { UserFormService } from './services/user-form.service';

@NgModule({
  declarations: [
    AppComponent,
	UserFormComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [UserFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
