import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public x = true;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }


  sendOtp() {
    this.x = false;
  }

  // otp input
  nxt(event, next, prev) {
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
      return 0;
    } 
  }

  async resendOtp() {
    const toast = await this.toastController.create({
      message: 'OTP sent',
      duration: 2500,
      mode: 'md',
      translucent: true
    });
    toast.present();
  }


  login() {
    console.log('login');
  }
}
