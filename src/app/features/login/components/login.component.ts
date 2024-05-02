import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/auth/auth.service';
import { TOAST_DURATION } from 'src/app/constants/constants';
import { StorageService } from 'src/app/security/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService,
    // private userService: UsersService,
    // private securityService: SecurityService,
    // private translate: TranslateService
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    });

  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const rememberMe = this.loginForm.get('rememberMe')?.value;


      this.authService.signIn({ username, password }).subscribe({
        next: (loginResponse) => {
          if (!loginResponse.body) {
            this.onErrorResponse({ detail: 'No se recibió información de autenticación' });
            this.router.navigate(['/login']);
            return;
          }

          this.storageService.store(loginResponse.body, rememberMe);
          this.router.navigate(['/home']);

        },
        error: (error) => {
          if (error?.status === 403) {
            this.onErrorResponse({ detail: 'Usuario o contraseña incorrectos' });
            return;
          }
          this.onErrorResponse(error?.error);
          this.router.navigate(['/login']);
        }
      })
    }
  }

  goToRecoverPassword(): void {
    this.router.navigate(['/recover-password']);
  }

  onErrorResponse(error: any): void {
    let errorMessage = 'Ocurrió un error inesperado'
    if (error?.detail) {
      errorMessage = error.detail;
    }
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: TOAST_DURATION
    });
  }
}
