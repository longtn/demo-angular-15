import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
