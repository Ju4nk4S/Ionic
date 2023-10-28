import { Component, OnInit } from '@angular/core';
import { AutheticationService } from 'src/app/services/auth/auth.service';
import { NavigationExtras,  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email:any
  constructor(
    public alertController: AlertController, 
    public route: Router,
    public authService: AutheticationService
    ) { }
  ngOnInit() {    
  }  
  async restablecer(){
  //  this.authService.restablecer(this.email).them(()=> {
    //  console.log('link de recuperacion')  
      //this.route.navigate(['/login'])      
    //}).catch((error: any) => {
     //console.log(error);      
    //})
  }  
}

