import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrtherComponent } from './pages/orther/orther.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyCasePipe } from './pipes/canFly.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrtherComponent,
    UncommonPageComponent,

    // Pipes
    ToggleCasePipe,
    CanFlyCasePipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }
