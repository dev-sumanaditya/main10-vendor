import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public step: Number = 1;
  public selectedImage = false;
  public imageData = '';

  public sendingOtp: boolean = false;

  constructor(
    public toastController: ToastController,
    public camera: Camera,
    public actionSheetController: ActionSheetController,
    public router: Router
    ) { }

  ngOnInit() {
  }

  sendOtp() {
    this.sendingOtp = true 
    setTimeout(() => {
      this.step = 2;
    }, 1500);
  }

  verifyOtp() {
    this.step = 3;
  }

  uploadImage() {
    this.step = 4;
  }

  details() {
    this.step = 5;
  }

  details2() {
    this.step = 6;
  }




  register() {
    this.router.navigate(['tnc']);
  }


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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select',
      buttons: [{
        text: 'Gallery',
        role: 'destructive',
        icon: 'images',
        handler: () => {
          console.log('Gallery clicked');
          this.takePhoto(0); // Photo library
          this.selectedImage = true;
        }
      }, {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('Share clicked');
          this.takePhoto(1); // camera
          this.selectedImage = true;
        }
      }]
    });
    await actionSheet.present();
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

  selectImage() {
    this.presentActionSheet();
  }


  // camera methods
  takePhoto(sourceType:number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then(
    (imageData) => {
      this.imageData = (<any>window).Ionic.WebView.convertFileSrc(imageData);

      console.log(this.imageData);
      this.selectedImage = true;
    },
    (err) => {
      console.log('error..................'+ err)
    });
  }
}
