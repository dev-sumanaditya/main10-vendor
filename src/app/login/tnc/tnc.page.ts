import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.page.html',
  styleUrls: ['./tnc.page.scss'],
})
export class TncPage implements OnInit {

  constructor(public router: Router) { }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  ngOnInit() {
  }

  public accept() {
    this.router.navigate(['tabs/tab1']);
  }
} 
