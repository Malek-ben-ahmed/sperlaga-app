import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, ValidatorFn } from '@angular/forms';






export function usernameValidator(users: { username: string, password: string }[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = users.some(user => user.username === control.value);
    return valid ? null : { 'invalidUsername': { value: control.value } };
  };
}

export function passwordValidator(users: { username: string, password: string }[], usernameControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const user = users.find(user => user.username === usernameControl.value);
    const valid = user && user.password === control.value;
    return valid ? null : { 'invalidPassword': { value: control.value } };
  };
}

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css'],
})
export class Screen2Component implements OnInit {
  Users: any = [
    { username: "Malek ben ahmed", password: "draxlmaier" },
    { username: "foulen ben foulen", password: "draxlmaier" }
  ];
  showpwd: boolean = false;

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      username: ['', [Validators.required, usernameValidator(this.Users)]],
      password: ['', [Validators.required]]
    });

    this.formGroup.get('username')!.valueChanges.subscribe(() => {
      this.formGroup.get('password')!.setValidators([Validators.required, passwordValidator(this.Users, this.formGroup.get('username')!)]);
      this.formGroup.get('password')!.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted', this.formGroup.value);
    }
  }

  toggle() {
    this.showpwd = !this.showpwd;
  }
}

 
