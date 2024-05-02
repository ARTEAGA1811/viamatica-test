import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPrimengModule } from './features/my-primeng/my-primeng.module';
import { MessageService } from 'primeng/api';
import { MainComponent } from './features/main/main.component';
import { MenuComponent } from './features/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecoverPassComponent } from './features/recover-pass/recover-pass.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './security/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    RecoverPassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MyPrimengModule,

  ],
  providers: [
    MessageService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
