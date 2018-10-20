import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { BottomHeaderComponent } from './components/bottom-header/bottom-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    TopHeaderComponent,
    BottomHeaderComponent,
    BreadcrumbComponent
  ],
  declarations: [
    TopHeaderComponent,
    BottomHeaderComponent,
    BreadcrumbComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
