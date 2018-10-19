import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { BottomHeaderComponent } from './components/bottom-header/bottom-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TopHeaderComponent,
    BottomHeaderComponent,
    TranslateModule
  ],
  declarations: [
    TopHeaderComponent,
    BottomHeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
