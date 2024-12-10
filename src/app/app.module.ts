import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DottedLineComponent } from './components/dotted-line/dotted-line.component';
import { StoreModule } from '@ngrx/store';
import { navigationReducer } from "src/app/state/navigation/navigation-reducers";
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { GridDemoComponent } from './components/grid-demo/grid-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DottedLineComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    GridDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    StoreModule.forRoot({ navigationState: navigationReducer }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
