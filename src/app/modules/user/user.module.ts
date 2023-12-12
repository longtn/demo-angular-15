import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './page/home/home.component';
import { ImportComponent } from './page/import/import.component';
import { ReportComponent } from './page/report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [HomeComponent, ImportComponent, ReportComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    HttpClientModule,
    MatProgressBarModule,
  ],
})
export class UserModule {}
