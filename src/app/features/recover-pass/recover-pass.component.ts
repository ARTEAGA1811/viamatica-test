import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { AuthService } from 'src/app/api/auth/auth.service';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.scss']
})
export class RecoverPassComponent {
  recoverPasswordForm!: FormGroup
  msgs: Message[] = [];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.recoverPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)])
    });
  }

  onSubmit(): void {
    if (this.recoverPasswordForm.valid) {
      const email: string = this.recoverPasswordForm.get('email')?.value;
      // this.authService.recoverPassword(email).subscribe({
      //   next: () => {
      //     this.msgs = [
      //       {
      //         severity: 'success',
      //         detail: 'Listo, se envió a tu correo las instrucciones para recuperar tu contraseña.'
      //       }
      //     ];
      //   },
      //   error: (response) => {
      //     this.msgs = [
      //       {
      //         severity: 'error',
      //         detail: 'Ocurrió un error al intentar recuperar la contraseña.'
      //       }
      //     ];
      //   }
      // });
    }
  }

}
