import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseError } from '@firebase/util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  error!: any;
  loading: boolean = false;
  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
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
  async signIn() {
    this.loading = true;
    this.error = '';
    if (this.emailInput?.invalid || this.passwordInput?.invalid) {
      this.error = 'invalid inputs';
      this.loading = false;
      return;
    }

    try {
      const res = await this.service.logIn(
        this.emailInput?.value,
        this.passwordInput?.value
      );

      if (res instanceof FirebaseError) {
        this.loading = false;
        this.error = res.code.substring(5).replace(/-/g, ' ');
      } else if (res) {
        this.loading = false;
        this.router.navigate(['/home']);
      } else {
        throw new Error('Invalid login credentials');
      }
    } catch (error) {
      this.loading = false;
      console.error(error);
    }
  }
}
