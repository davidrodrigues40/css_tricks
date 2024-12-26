import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DottedLineComponent } from './components/dotted-line/dotted-line.component';
import { HomeComponent } from './components/home/home.component';
import { GridDemoComponent } from './components/grid-demo/grid-demo.component';
import { CustomPropertiesComponent } from './components/custom-properties/custom-properties.component';
import { HtmlPdfComponent } from './components/html-pdf/html-pdf.component';

const routes: Routes = [
  {
    path: 'dotted-line', component: DottedLineComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'grid', component: GridDemoComponent
  },
  {
    path: 'custom-properties', component: CustomPropertiesComponent
  },
  {
    path: 'html-pdf', component: HtmlPdfComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
