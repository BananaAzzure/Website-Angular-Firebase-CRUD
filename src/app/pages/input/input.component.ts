import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FirestoreService } from '../../service/firestore.service'

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.firestore.addDocument('users', this.validateForm.value).then(() => {
        console.log('Data saved successfully');
      }).catch(error => {
        console.error('Error saving data:', error);
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
