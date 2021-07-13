import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AcademyListComponent } from './academy-list/academy-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
  { path: 'academy-list', component: AcademyListComponent },
  { path: 'customer-info', component: CustomerInfoComponent },
  { path: 'file-uploader', component: FileUploaderComponent },
  { path: 'top-bar', component: TopBarComponent },
  { path: '**', component:  AcademyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
