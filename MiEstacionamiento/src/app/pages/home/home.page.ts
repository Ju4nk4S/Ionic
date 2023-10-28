import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EstacionamientoService } from 'src/app/services/get/data-parck.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { AutheticationService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],})
export class HomePage implements OnInit {
  user: any
  mensaje: string= "";

  nombres : string = "";
  router: any;  
  estacionamiento: any;
  constructor(public rutaActiva: ActivatedRoute,public alertController: AlertController, public storage: Storage,public as:EstacionamientoService,
    public authService: AutheticationService,
    public route: Router ) { 
    this.user = authService.perfil( )
    this.verEstacionamiento();
    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['nombreUser']){
        this.nombres = params['nombreUser'];
      }      
    })    
  }
  verEstacionamiento() {
    this.as.verEstacionamiento().subscribe((resp: any) => {
      this.estacionamiento = resp;
        console.log(this.estacionamiento);
    })
  }
  ngOnInit() {
    this.nombres = history.state.nombre;
  }
  async logout(){
    this.authService.signOut().then(()=> {
      this.route.navigate(['/login'])
    }).catch ((error)=>{
      console.log(error);
    })
  }
  
}
