import { Component, Directive, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private service: AuthService,
    private router: Router,
    public dialog: MatSnackBar
  ) {}

  logOut() {
    let res = this.service.signOut();
    console.log(res);

    if (!res) throw new Error(`something went wrong`);
    return this.router.navigate(['/signIn']);
  }
}
