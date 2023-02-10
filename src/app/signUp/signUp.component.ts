import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, catchError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { FirebaseError } from '@firebase/util';
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  public error: any;
  public loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.form.valueChanges.subscribe(console.log);
  }

  get emailInput() {
    return this.form.get('email');
  }

  get passwordInput() {
    return this.form.get('password');
  }

  async signUp() {
    this.loading = true;
    try {
      if (this.emailInput?.invalid || this.passwordInput?.invalid) {
        this.loading = false;
        this.error = 'Invalid Inputs';
        return;
      }
      let res = await this.service.register(
        this.emailInput?.value,
        this.passwordInput?.value
      );

      if (res instanceof FirebaseError) {
        this.loading = false;
        this.error = res.code.substring(5).replace(/-/g, ' ');
        return;
      }

      if (res) {
        this.loading = false;
        this.router.navigate(['/home']);
      }
      return;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
