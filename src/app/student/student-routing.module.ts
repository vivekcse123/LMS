import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { NotesComponent } from './notes/notes.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { QuizComponent } from './quiz/quiz.component';
import { QueriesComponent } from './queries/queries.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', 
    loadComponent :() => import('../student/student-dashbaord/student-dashbaord.component').then(m => m.StudentDashbaordComponent),
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadComponent :() => import('../student/home/home.component').then(m => m.HomeComponent)},
      {path: 'courses', component: CoursesComponent},
      {path: 'notes', component: NotesComponent},
      {path: 'assignments', component: AssignmentsComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'queries', component: QueriesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
