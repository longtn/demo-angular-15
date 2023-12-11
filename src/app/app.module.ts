import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

import { AuthModule } from '@modules/auth/auth.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from '@modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    
    AuthLayoutComponent,
    UserLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    AuthModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
