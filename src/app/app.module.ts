import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DottedLineComponent } from './components/dotted-line/dotted-line.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { GridDemoComponent } from './components/grid-demo/grid-demo.component';
import { FooterComponent } from './components/footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { NavigationService } from './services/navigation-service';
import { MenuService } from './services/menu-service';
import { reducers } from './state/reducers';
import { MenuEffects } from './state/menu/menu-effects';
import { NavigationEffects } from './state/navigation/navigation-effects';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CodeTemplateComponent } from './components/code-template/code-template.component';
import { CustomPropertiesComponent } from './components/custom-properties/custom-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    DottedLineComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    GridDemoComponent,
    FooterComponent,
    CodeTemplateComponent,
    CustomPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatIconModule,
    ClipboardModule,
    MatButtonModule,
    MatMenuModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(MenuEffects, NavigationEffects),
    BrowserAnimationsModule
  ],
  providers: [NavigationService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
