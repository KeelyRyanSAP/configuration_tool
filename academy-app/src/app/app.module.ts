import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentDensityService, FundamentalNgxCoreModule, RtlService } from '@fundamental-ngx/core';
import { AcademyListComponent } from './academy-list/academy-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FormsModule } from '@angular/forms';
import { PopoutWindowModule } from 'angular-popout-window';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    AcademyListComponent,
    CustomerInfoComponent,
    FileUploaderComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FundamentalNgxCoreModule,
    PopoutWindowModule,
    FormsModule,
    MatToolbarModule

  ],
  providers: [
    RtlService,
    ContentDensityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
