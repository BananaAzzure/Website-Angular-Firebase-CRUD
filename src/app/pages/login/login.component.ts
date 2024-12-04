import { Component } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, } from '@angular/router';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AngularFireAuthModule, ReactiveFormsModule, NzFormModule, NzButtonModule, NzInputModule, NzCheckboxModule, RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    try {
      await this.authService.login(email, password);
      this.router.navigate(['/welcome']);
      alert('Login successful!');
    } catch (error: any) {
      alert(`Login failed: ${error.message}`);
    }
  }
}