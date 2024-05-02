import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TOAST_DURATION } from 'src/app/constants/constants';
import { StorageService } from '../storage.service';
// import { LIFE_TIME } from 'src/app/constants/constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private static readonly UNAUTHORIZED_STATUS = 401;
  private static readonly FORBIDDEN_STATUS = 403;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private messageService: MessageService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.getToken();
    console.log('token', token)

    const authReq = token ? req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    }) : req;

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === TokenInterceptor.UNAUTHORIZED_STATUS) {
          this.handleUnauthorizedError();
        }
        if (err.status === TokenInterceptor.FORBIDDEN_STATUS) {
          this.handleForbiddenError();
        }
        return throwError(() => err);
      })
    );
  }


  handleForbiddenError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Su sesión ha expirado, por favor inicie sesión nuevamente.',
      life: TOAST_DURATION
    });
    this.storageService.removeAuth();
    void this.router.navigateByUrl('/login');
  }


  handleUnauthorizedError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Usted no tiene permisos para realizar esta acción.',
      life: TOAST_DURATION
    });
    this.storageService.removeAuth();
    void this.router.navigateByUrl('/login');
  }
}
