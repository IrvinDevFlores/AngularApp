import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { UserService } from './services/user-service.service';
import { UserComponent } from './components/user-component/user-component.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FechaComponent } from './components/fecha/fecha.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ChartsModule } from 'ng2-charts';
 
@NgModule({
  declarations: [AppComponent, ProductComponent, UserComponent,
     HomeComponent, FechaComponent, GraficoComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    
    MaterialModule,
    BrowserAnimationsModule,
  ],
  exports: [MaterialModule],

  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
