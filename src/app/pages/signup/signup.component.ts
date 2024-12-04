import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [
    NzButtonModule, NzFormModule, NzInputModule, FormsModule, ReactiveFormsModule, RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  form: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.form.invalid) return;

    this.isSubmitting = true;
    const { email, password } = this.form.value;

    try {
      await this.authService.signUp(email, password);
      alert('Signup successful! Redirecting to login...');
      this.router.navigate(['/login']);
    } catch (error: any) {
      alert(`Signup failed: ${error.message}`);
    } finally {
      this.isSubmitting = false;
    }
  }
}
