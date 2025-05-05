import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  {path: '', redirectTo: 'common-dashboard', pathMatch: 'full'},
  {path: 'common-dashboard', component: CommonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
