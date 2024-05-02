import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { MyPrimengModule } from '../my-primeng/my-primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/api/users/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/security/interceptors/token.interceptor';


@NgModule({
  declarations: [
    IndicatorsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MyPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class DashboardModule { }
