import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  email: any

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registroUsuario(email: string,password: string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

  }
  async loginUsuario(email: string,password: string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }
  async resetPassword(email: string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }
  async signOut (){
    return await this.ngFireAuth.signOut()
  }
  async perfil (){
    return await this.ngFireAuth.currentUser
  }
}
