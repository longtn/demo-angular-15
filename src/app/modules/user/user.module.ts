import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
