import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private pagesService: PagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/board']);
    }

    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        if (data !== null) {
          localStorage.setItem('token', data);
          this.router.navigate(['/board']);
          this.pagesService.openSuccessSnackBar('Sucesso ao realizar login!');
        } else {
          this.pagesService.openFailureSnackBar('Erro ao realizar login...');
        }
      },
      (error) => {
        console.log(error);
        this.pagesService.openFailureSnackBar('Erro ao realizar login...');
      }
    );
  }
}
