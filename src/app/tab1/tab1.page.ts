import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public ShopStatus: Boolean = false;

  public dummy = [1,1,1,1,1,1,1,,1,1,1,1,1];

  shopState() {
    this.ShopStatus = !this.ShopStatus;
  }
}
