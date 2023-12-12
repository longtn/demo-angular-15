import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import { User } from '@data/schema/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private auth: AuthService) {}

  onSubmit() {
    if (!this.formGroup.valid) return;

    this.auth.onLogin(this.formGroup.value).subscribe((res) => {
      if (res == null) {
        alert('Invalid emial or password');
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
