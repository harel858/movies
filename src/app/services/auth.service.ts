import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of } from 'rxjs';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  Auth,
} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import {
  collection,
  collectionData,
  Firestore,
  getFirestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: boolean;
  items$!: Observable<any>;

  constructor(
    private app: FirebaseApp,
    private auth: Auth,
    private firstore: Firestore
  ) {
    this.app = initializeApp(environment.firebase);
    this.auth = getAuth(this.app);
    this.firstore = getFirestore(this.app);
    let col = collection(this.firstore, 'details');
    this.items$ = collectionData(col);
    this.items$.subscribe(console.log);
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log(user);

        this.user$ = true;
        return;
      }
      this.user$ = false;
    });
  }

  async register(email: string, password: string) {
    try {
      let res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log(res);
      return res;
    } catch (err) {
      return err;
    }
  }

  async logIn(email: string, password: string) {
    try {
      let res = await signInWithEmailAndPassword(this.auth, email, password);
      console.log(res);
      return res;
    } catch (err) {
      return err;
    }
  }
  public async signOut() {
    try {
      return await signOut(this.auth);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
