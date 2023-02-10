import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [MoviesService],
})
export class HomeModule {}
