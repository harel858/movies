import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SignUpModule } from './signUp/signUp.module';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {
  getFirestore,
  provideFirestore,
  FirestoreModule,
} from '@angular/fire/firestore';
import {} from '@angular/fire';
import { AuthModule } from '@angular/fire/auth';
import { SignInModule } from './sign-in/sign-in.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ScrollDirective } from './directives/scroll.directive';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MediaComponent,
    ContactComponent,
    MovieDetailsComponent,
    ScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    SignUpModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FirestoreModule,
    AuthModule,
    SignInModule,
    HomeModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
