import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './page/home/home.component';
import { ExampleFormComponent } from './page/example-form/example-form.component';

@NgModule({
  declarations: [HomeComponent, ExampleFormComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
