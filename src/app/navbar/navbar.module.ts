import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatToolbarModule,
  MatToolbarRow,
  MatToolbar,
} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSnackBarModule,
  ],
  exports: [MatToolbarRow, MatToolbar, NavbarComponent],
})
export class NavbarModule {}
