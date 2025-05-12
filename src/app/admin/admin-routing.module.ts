import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';
import { UploadAssignmentsComponent } from './upload-assignments/upload-assignments.component';
import { QueriesComponent } from './queries/queries.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { 
    path: 'dashboard', 
    loadComponent: () => import('../admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadComponent : () => import('../admin/home/home.component').then(m => m.HomeComponent)},
      {path: 'manage-students', component: ManageStudentsComponent},
      {path: 'students-list', component: StudentListComponent},
      {path: 'upload-notes', component: UploadNotesComponent},
      {path: 'upload-assignments', component: UploadAssignmentsComponent},
      {path: 'queries', component: QueriesComponent},
      {path: 'quiz', component: QuizComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
