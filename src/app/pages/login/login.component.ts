import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private localStorage: LocalstorageService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe((data) => {
        this.localStorage.setValue('access', data.access);
        this.localStorage.setValue('refresh', data.refresh);
        this.router.navigateByUrl('/');
      });
    }
  }
}
