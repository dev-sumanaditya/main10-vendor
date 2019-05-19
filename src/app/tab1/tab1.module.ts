import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { OrderCardComponent } from '../components/order-card/order-card.component';
import { OrderCardActiveComponent } from '../components/order-card-active/order-card-active.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    OrderCardComponent,
    OrderCardActiveComponent
  ]
})
export class Tab1PageModule {}
