import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from './services/auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './signUp/signUp.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  {
    path: 'media',
    component: MediaComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: MovieDetailsComponent,
      },
    ],
  },
  { path: 'contact', canActivate: [AuthGuard], component: ContactComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
