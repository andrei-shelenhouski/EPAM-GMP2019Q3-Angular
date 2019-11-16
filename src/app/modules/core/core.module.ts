import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent],
  imports: [
    SharedModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent
  ]
})
export class CoreModule { }
